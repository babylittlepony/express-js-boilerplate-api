const loginRoute = require("./login");
const registerRoute = require("./register");

function userRoutes(app) {
  app.use("/api", [loginRoute, registerRoute]);
}

module.exports = userRoutes;
