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
        const { email, oldPassword } = req.body;

        const user = await User.findByPk(req.userId);

        if (email !== user.email) {
            const userExists = await User. findOne({
                where: { email: req.body.email}
            });

            if (userExists) {
                return res.status(400).json("Usuário já existe na aplicação!");
            }
        }

        if (oldPassword && !(await user.checkPassword(oldPassword))) {
            return res.status(401).json("Senha inválida!");
        }

        await user.update(req.body);

        return res.json("Usuário alterado com sucesso!");
    }

}

export default new UserController();