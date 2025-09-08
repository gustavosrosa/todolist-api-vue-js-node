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

}

export default new TaskController();