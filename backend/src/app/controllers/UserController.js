import User from "../models/User";

class UserController {

    async create(req, res) {
        
        const userExists = await User.findOne({
            where: { email: req.body.email }
        });

        if (userExists) {
            return res.status(400).json("Usuário já existe!");
        }

        await User.create(req.body);

        return res.status(201).json("Usuário criado com sucesso!");

    }

    async update(req, res) {
        return res.json({ OK: true });
    }

}

export default new UserController();