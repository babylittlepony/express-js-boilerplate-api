const express = require("express");

const {
  handleValidationAndRegistration,
  validation,
} = require("../middlewares/handleValidationAndRegistration");

const route = express.Router();

route.post("/register", validation, handleValidationAndRegistration);

module.exports = route;
