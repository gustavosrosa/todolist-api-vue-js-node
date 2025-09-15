import { Sequelize } from 'sequelize';
import database from '../config/database';
import Task from '../app/models/Task';
import User from '../app/models/User';

const models = [Task, User];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(database.development);
        models.map((model) => { model.init(this.connection) });
    }
}

export default new Database();