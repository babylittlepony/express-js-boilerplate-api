/* All user route goes here */

const loginRoute = require("./login");
const registerRoute = require("./register");
const protectedRoute = require("./protected");

function userRoutes(app) {
  app.use("/api", [loginRoute, registerRoute, protectedRoute]);
}

module.exports = userRoutes;
