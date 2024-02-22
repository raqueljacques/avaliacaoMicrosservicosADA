const { Router } = require("express");
const SessionController = require("./controllers/session-ctrl");
const AuthController = require("./controllers/auth-ctrl");

const routes = new Router();

routes.post("/session", SessionController.create);

routes.post("/auth", AuthController.verify);

module.exports = routes;
