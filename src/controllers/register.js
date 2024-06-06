const { hash } = require("../helpers/hash");
const { user } = require("../models/user");

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  const hashedPassword = await hash(password);

  const newUser = new user({
    username,
    email,
    password: hashedPassword,
  });

  res.json({ newUser });
};

module.exports = { registerUser };
