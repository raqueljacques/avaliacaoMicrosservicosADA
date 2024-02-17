const { Router } = require("express");
const RegisterHandler = require("./handlers/register-handler");
const AuthHandler = require("./handlers/auth-handler");
const OrderHandler = require("./handlers/order-handler");

const routes = new Router();

routes.post("/register", RegisterHandler.create);

routes.post("/session", AuthHandler.login);

// TODO: Verifica se o token é válido?
routes.post("/auth", AuthHandler.verify);

routes.post("/order", OrderHandler.create);

module.exports = routes;
