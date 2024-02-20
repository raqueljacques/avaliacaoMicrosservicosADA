const OrderSchema = require("../schemas/Order");
const UserSchema = require("../schemas/User");

class OrderService {
  static async create(newOrder) {
    const order = await OrderSchema.create(newOrder);
    return order;
  }

  static async findUser(userId){
    return await UserSchema.findOne({
      _id: userId
  })
  }
}

module.exports = OrderService;
