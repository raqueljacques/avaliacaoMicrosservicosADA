const { Router } = require("express");
const RegisterHandler = require("./handlers/register-handler");
const AuthHandler = require("./handlers/auth-handler");
const OrderHandler = require("./handlers/order-handler");
const AddressHandler = require("./handlers/address-handler");
const authMiddleware = require("./middlewares/auth");

const routes = new Router();

routes.post("/register", RegisterHandler.create);

routes.post("/session", AuthHandler.login);

routes.post("/auth", AuthHandler.verify);

routes.post("/order", authMiddleware, (req, res) => {
    OrderHandler.create(req, res);
});

//TODO: UM Middleware pode funcionar fazendo uma requisição pro auth e usando o resultado disso no address handler?
routes.post("/address", authMiddleware, (req, res) => {
    AddressHandler.create(req, res);
});

module.exports = routes;
