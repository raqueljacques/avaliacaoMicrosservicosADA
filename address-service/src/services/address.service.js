const UserSchema = require("../schemas/User");

class AddressService {
  static async getUserById(id) {
    const user = await UserSchema.findOne({ _id: id });
    return user;
  }
}

module.exports = AddressService;
