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

  await newUser
    .save()
    .then(() => {
      console.log("User Saved");
    })
    .catch((err) => console.error(err));

  res.json({ newUser });
};

module.exports = { registerUser };
