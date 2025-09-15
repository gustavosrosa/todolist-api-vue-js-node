class SessionController {

    async store(req, res) {

        const { email, password } = req.body;

        const user = await User.findOne({
            where: { email: email }
        })

        if (!user) {
            return res.status(401).json("Usuário não existe!");
        }

        if (!(await user.checkPassword(password))) {
            return res.status(401).json("Usuário ou senha incorretos!");
        }

        const { id, name } = user;

        return res.json({
            user: {
                id,
                email,
                name,
            },
            token: jwt.sign({ id }, auth.secret, {
                expiresIn: auth.expires_in,
            }),
        });

    }

}

export default new SessionController();