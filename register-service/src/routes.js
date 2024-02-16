const { Router } = require("express");
const UserController = require("./controllers/user-ctrl");

const routes = new Router();

routes.post("/create", UserController.create);

module.exports = routes;
