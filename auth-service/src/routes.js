const { Router } = require("express");
const SessionController = require("./controllers/session-ctrl");

const routes = new Router();

routes.post("/session", SessionController.create);

module.exports = routes;
