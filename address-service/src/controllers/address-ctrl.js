const yup = require("yup");
const axios = require("axios");
const UserService = require("../services/user.service");
const AddressException = require("../utils/errors/AddressException");

class AddressController {
    static async getByCEP(req, res) {
        try {
            const address = req.body;

            const schema = yup.object({
                cep: yup.string().required(),
                userId: yup.string().required(),
            });

            if (!(await schema.isValid(address))) {
                throw { message: "Address is not valid.", status: 400 };
            }

            const authUser = await UserService.userExistsById(address.userId);

            if (!authUser) {
                throw new AddressException("User not found", 404);
            }

            if (
                !address.cep ||
                address.cep.length !== 8 ||
                !/^\d+$/.test(address.cep)
            ) {
                throw new AddressException("Invalid CEP", 400);
            }

            const response = await axios.get(
                `https://viacep.com.br/ws/${address.cep}/json/`
            );

            if (response.data.erro) {
                throw new AddressException("CEP not found", 404);
            }

            const updatedUser = await UserService.updateById(
                authUser._id,
                response.data
            );

            res.status(200).json(updatedUser);
        } catch (error) {
            console.log(error);
            res.status(error.status || 500).json({ message: error.message });
        }
    }
}
module.exports = AddressController;
