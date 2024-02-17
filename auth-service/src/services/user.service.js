const UserSchema = require("../schemas/User");

class UserService {
    static async userExistsByEmail(email) {
        const user = await UserSchema.findOne({
            email: email,
        });
        return user;
    }

    static checkPassword(password, shouldMatchPassword) {
        return password === shouldMatchPassword;
    }
}

module.exports = UserService;
