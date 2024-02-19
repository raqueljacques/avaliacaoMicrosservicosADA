const { Router } = require("express");
const OrderController = require("./controllers/order-ctrl");

const orderRoutes = new Router();

orderRoutes.post("/order", OrderController.create);

module.exports = orderRoutes;
