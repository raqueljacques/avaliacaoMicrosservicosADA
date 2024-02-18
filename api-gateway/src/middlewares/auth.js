const axios = require("axios");

module.exports = async (req, res, next) => {
    try {
        const authUser = await axios.post(
            `${process.env.AUTH_SERVICE_BASE_URL}/auth`,
            {},
            {
                headers: {
                    Authorization: req.headers.authorization,
                },
            }
        );

        req.body.userId = authUser.data.user.id;

        next();
    } catch (error) {
        res.status(error?.response?.status || 500).json({
            error: error?.response?.data?.error || "Server Error ",
        });
    }
};
