const yup = require("yup");
const UserService = require("../services/user.service");
const UserException = require("../utils/errors/UserException");

class UserController {
    static async create(req, res) {
        try {
            const user = req.body;

            const schema = yup.object({
                email: yup.string().email().required(),
                password: yup.string().min(6).required(),
            });

            if (!(await schema.isValid(user))) {
                throw UserException("Validation Fails", 400);
            }

            const newUser = await UserService.create(user);

            res.status(201).json(newUser);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    }
}

module.exports = UserController;
