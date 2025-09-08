import Sequelize, { Model } from 'sequelize';
import { strings } from '../../../languages';

class Task extends Model {

    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            description: Sequelize.STRING,
        },
        {
            freezeTableName: true,
            tableName: strings.TABLE_TASKS,
            sequelize
        })
    }

}

export default Task;