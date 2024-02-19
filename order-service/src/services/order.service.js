const OrderSchema = require("../schemas/Order");

class OrderService {
  static async create(newOrder) {
    const order = await OrderSchema.create(newOrder);
    return order;
  }
}

module.exports = OrderService;
