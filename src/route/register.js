const router = require("express").Router();

const {
  handleValidationAndRegistration,
  validation,
} = require("../middlewares/handleValidationAndRegistration");

const registerRoute = router.post(
  "/register",
  validation,
  handleValidationAndRegistration
);

module.exports = registerRoute;
