const express = require("express");
const { loginUser } = require("../controllers/login");

const router = express.Router();

const loginRoute = router.post("/login", loginUser);

module.exports = loginRoute;
