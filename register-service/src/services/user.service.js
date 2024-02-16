const UserSchema = require("../schemas/User");
const UserException = require("../utils/errors/UserException");

class UserService {
    static async create(newUserInput) {
        try {
            const existingUser = await UserSchema.findOne({
                email: newUserInput.email,
            });

            if (existingUser !== null) {
                //TODO pq quando dá esse erro, no postman não aparece essa mensagem e sim server error?
                throw new UserException("User already exists", 400);
            }

            const newUser = await UserSchema.create(newUserInput);

            return newUser;
        } catch (error) {
            console.error("Error in UserService create:", error);
            throw new UserException(error.message, error.status);
        }
    }
}

module.exports = UserService;
