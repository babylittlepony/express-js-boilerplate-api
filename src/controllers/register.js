const { hash } = require("../helpers/hash");
const { userModel } = require("../models/user");

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  const hashedPassword = await hash(password);

  const newUser = new userModel({
    username,
    email,
    password: hashedPassword,
  });

  res.json({ newUser });
};

module.exports = { registerUser };
