const axios = require("axios");

class AuthHandler {
    static async create(req, res) {
        try {
            const { data } = await axios.post(
                `${process.env.AUTH_SERVICE_BASE_URL}/session`,
                req.body
            );

            return res.status(200).json(data);
        } catch (error) {
            console.log(error);
            res.status(error?.response?.status || 500).json({
                error: error?.response?.data?.error || "Server Error ",
            });
        }
    }
}

module.exports = AuthHandler;
