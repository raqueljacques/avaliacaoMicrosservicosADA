const { Router } = require("express");
const RegisterHandler = require("./handlers/register-handler");
const AuthHandler = require("./handlers/auth-handler");

const routes = new Router();

routes.post("/user", RegisterHandler.create);

routes.post("/session", AuthHandler.create);

module.exports = routes;
