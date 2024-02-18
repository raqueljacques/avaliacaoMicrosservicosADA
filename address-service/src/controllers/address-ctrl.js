const axios = require("axios");
const AddressService = require("../services/address.service");

class AddressController {
  static async getByCEP(req, res) {
    try {
      const { cep, userId } = req.body;

      // Validação básica do CEP
      if (!cep || cep.length !== 8 || !/^\d+$/.test(cep)) {
        throw Exception("Invalid CEP", 400);
      }

      // Consulta a API Via CEP
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

      // Verifica se o CEP é válido na API Via CEP
      if (response.data.erro) {
        throw Exception("CEP not found", 404);
      }

      // Cria ou atualiza o endereço no serviço
      const addressData = {
        street: response.data.logradouro,
        neighborhood: response.data.bairro,
        city: response.data.localidade,
        state: response.data.uf,
        country: response.data.pais || "Brasil",
      };

      const user = await AddressService.getUserById(userId);
      if (user === null) {
        throw Exception("User not found", 404);
      }

      user.street = addressData.street;
      user.neighborhood = addressData.neighborhood;
      user.city = addressData.city;
      user.state = addressData.state;
      user.country = addressData.country;
      user.cep = cep;
      await user.save();

      const userResponse = {
        name: user.name,
        email: user.email,
        cpf: user.cpf,
        street: user.street,
        number: user.number,
        neighborhood: user.neighborhood,
        city: user.city,
        state: user.state,
        country: user.country,
        cep: user.cep,
      };

      res.status(200).json(userResponse);
    } catch (error) {
      console.log(error);
      res.status(error.status || 500).json({ message: error.message });
    }
  }
}
module.exports = AddressController;
