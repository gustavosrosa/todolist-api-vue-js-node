import Sequelize, { Model } from 'sequelize';
import { strings } from '../../../languages';
import bcrypt from 'bcryptjs';

class User extends Model {

    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.VIRTUAL,
            password_hash: Sequelize.STRING,
        },
        {
            freezeTableName: true,
            tableName: strings.TABLE_USERS,
            sequelize
        });

        this.addHook('beforeSave', async (user) => {
            if (user.password) {
                user.password_hash = await bcrypt.hash(user.password, 8);
            }
        });

        return this;
    }

}

export default User;