const express = require("express");

const {
  handleValidationAndRegistration,
  validation,
} = require("../middlewares/handleValidationAndRegistration");

const router = express.Router();

const registerRoute = router.post(
  "/register",
  validation,
  handleValidationAndRegistration
);

module.exports = registerRoute;
