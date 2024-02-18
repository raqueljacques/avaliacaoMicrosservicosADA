const jwt = require("jsonwebtoken");

class AuthController {
    static async verify(req, res) {
        const bearer = req.headers["authorization"];

        if (!bearer) {
            return res.status(401).json({ error: "Token not provided" });
        }

        const [, token] = bearer.split(" ");

        if (!token) {
            return res.status(401).json({ error: "Token not provided" });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

            return res.status(200).json({ user: decoded });
        } catch (error) {
            return res
                .status(error.status || 401)
                .json({ error: error.message || "Unauthorized" });
        }
    }
}

module.exports = AuthController;
