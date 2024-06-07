/* User login route */

const router = require("express").Router();
const { loginUser } = require("../controllers/login");

const loginRoute = router.post("/login", loginUser);

module.exports = loginRoute;
