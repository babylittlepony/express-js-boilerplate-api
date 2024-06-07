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

  await newUser.save().catch((err) => console.error(err)); // Save registered user to DB

  res.status(200).json({ message: "User created" });
};

module.exports = { registerUser };
