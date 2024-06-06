const express = require("express");
const { validationResult } = require("express-validator");
const { validation, registerUser } = require("../controllers/register");

const route = express.Router();

route.post("/register", validation, async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const validationErrors = errors.array().map((error) => ({
      field: error.param,
      message: error.msg,
    }));
    return res.status(400).json({ errors: validationErrors });
  }

  try {
    await registerUser(req, res);
  } catch (error) {
    console.error("Error during registeration", error);
    res.sendStatus(500);
  }
});

module.exports = route;
