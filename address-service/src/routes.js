const { Router } = require("express");
const AddressController = require("./controllers/address-ctrl");

const addressRoutes = new Router();

addressRoutes.post("/address", AddressController.getByCEP);

module.exports = addressRoutes;
