const { body } = require("express-validator");

const { user } = require("../models/user");

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  const newUser = new user({
    username,
    email,
    password,
  });

  res.json({ newUser });
};

const validation = [
  body("password")
    .isLength(3)
    .withMessage("Password must be at least 3 characters long"),
  body("email").isEmail().normalizeEmail().withMessage("Invalid email address"),
];

module.exports = { registerUser, validation };
