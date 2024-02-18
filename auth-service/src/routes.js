const { Router } = require("express");
const SessionController = require("./controllers/session-ctrl");

const routes = new Router();

// Rota para criação de sessão
routes.post("/session", SessionController.create);

// Rota para verificação de autenticação
routes.post("/auth", AuthController.verify);

module.exports = routes;
