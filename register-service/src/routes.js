const { Router } = require("express");
const UserController = require("./controllers/user-ctrl");

const routes = new Router();

routes.post("/register", UserController.create);

module.exports = routes;
