const jwt = require("jsonwebtoken");

class SessionService {
    static createToken(user) {
        return jwt.sign(
            {
                id: user.id,
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: 3000,
            }
        );
    }
}

module.exports = SessionService;
