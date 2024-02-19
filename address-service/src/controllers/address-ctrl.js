const axios = require("axios");
const UserService = require("../services/user.service");
const AddressException = require("../utils/errors/AddressException")

class AddressController {
    static async getByCEP(req, res) {
        try {
            const { cep, userId } = req.body;

            // Validação se o usuário está autenticado
            const authUser = await UserService.userExistsById(userId);

            if (!authUser) {
                throw new AddressException("User not found", 404);
            }

            // Validação básica do CEP
            if (!cep || cep.length !== 8 || !/^\d+$/.test(cep)) {
                throw new AddressException("Invalid CEP", 400);
            }

            // Consulta a API Via CEP
            const response = await axios.get(
                `https://viacep.com.br/ws/${cep}/json/`
            );

            // Verifica se o CEP é válido na API Via CEP
            if (response.data.erro) {
                throw new AddressException("CEP not found", 404);
            }

            //Atualiza o endereço do usuário
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
