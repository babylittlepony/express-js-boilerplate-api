const { query, validationResult } = require("express-validator");

const { user } = require("../models/user");

const registerUser =
  (query(["username", "email", "password"]).notEmpty().escape(),
  (req, res) => {
    const { username, email, password } = req.body;
    const result = validationResult(req);

    if (result.isEmpty() === false) {
      throw console.error("Please input the data");
    }

    const newUser = new user({
      username,
      email,
      password,
    });

    res.json({ newUser });
  });

module.exports = registerUser;
