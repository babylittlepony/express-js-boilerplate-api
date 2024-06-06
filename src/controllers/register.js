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

module.exports = { registerUser };
