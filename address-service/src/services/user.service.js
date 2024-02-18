const UserSchema = require("../schemas/User");

class UserService {
    static async userExistsById(id) {
        return (user = await UserSchema.findOne({
            _id: id,
        }));
    }

    static async updateById(id, data) {
        const mappedData = {
            cep: data.cep,
            street: data.logradouro,
            neighborhood: data.bairro,
            city: data.localidade,
            state: data.uf,
            country: "Brasil", //TODO: A API de CEP não retorna o país, é sempre Brasil
            number: "00", //TODO: O número do endereço não é retornado pela API de CEP
        };

        return (user = await UserSchema.findOneAndUpdate(
            { _id: id },
            mappedData,
            {
                new: true,
            }
        ));
    }
}

module.exports = UserService;
