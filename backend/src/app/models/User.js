import Sequelize, { Model } from 'sequelize';
import { strings } from '../../../languages';

class User extends Model {

    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password_hash: Sequelize.STRING,
        },
        {
            freezeTableName: true,
            tableName: strings.TABLE_USERS,
            sequelize
        })
    }

}

export default User;