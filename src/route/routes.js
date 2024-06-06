const loginRoute = require("./login");
const registerRoute = require("./register");

function userRoutes(app) {
  app.post("/register", registerRoute);
  app.post("/login", loginRoute);
}

module.exports = userRoutes;
