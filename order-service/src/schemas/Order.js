const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  userId: String,
  description: String 
});

module.exports = mongoose.model("Order", OrderSchema);