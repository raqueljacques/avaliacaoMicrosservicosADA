const { Router } = require("express");
const AddressController = require("./controllers/address-ctrl");

const addressRoutes = new Router();

// Rota para obter um endereço por ID
addressRoutes.post("/address", AddressController.getByCEP);

module.exports = addressRoutes;
