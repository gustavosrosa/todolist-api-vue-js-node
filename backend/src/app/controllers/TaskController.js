import Task from '../models/Task';

class TaskController {

    /**
     * Create new Task
     */
    async store(req, res) {
        const taskExists = await Task.findOne({
            where: { name: req.body.name },
        });

        if (taskExists) {
            return res.status(400).json("Tarefa já existe!");   
        }

        await Task.create(req.body);

        return res.status(201).json("Tarefa criada com sucesso!");
    }

    /**
     * Get All Tasks
     */
    async getTasks(req, res) {
        const tasks = await Task.findAll();
        return res.json(tasks);
    }

    /**
     * Get task by ID
     * @param {*} req 
     * @param {*} res 
     * @returns a task filtered by your id
     */
    async getTaskById(req, res) {
        const { id } = req.params

        const taskById = await Task.findByPk(id);

        if (!taskById) {
            return res.json({});
        }

        return res.json(taskById);
    }

    async update(req, res) {
        const { id } = req.params;

        const task = await Task.findByPk(id);

        if (!task) {
            return res.status(400).json("Tarefa não encontrada!");
        }

        const taskExists = await Task.findOne({
            where: { name: req.body.name },
        });

        if (taskExists) {
            return res.status(400).json("Tarefa já existe!");   
        }

        await task.update(req.body);

        return res.json("Alterado com sucesso!");
    }

    async remove(req, res) {
        const { id } = req.params;

        const task = await Task.findByPk(id);

        if (!task) {
            return res.status(400).json("Tarefa não encontrada!");
        }

        await task.destroy();

        return res.json("Removida com sucesso!");
    }

}

export default new TaskController();