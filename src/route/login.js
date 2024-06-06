const express = require("express");
const { loginUser } = require("../controllers/login");

const route = express.Router();

const loginRoute = route.post("/login", loginUser);

module.exports = loginRoute;
