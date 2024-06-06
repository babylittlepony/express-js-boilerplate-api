const comparePasswords = require("../helpers/comparePassword");
const { userModel } = require("../models/user");

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  let user;
  try {
    const user = await userModel.findOne({ username, password });
  } catch (error) {
    return console.error(error);
  }

  if (!user) {
    return res.status(400).json({ message: "Invalid username or password" });
  }

  const isPasswordMatch = await comparePasswords(password, user.password);

  if (isPasswordMatch) {
    return res.status(200).json({ message: "Logged in" });
  } else {
    res.sendStatus(400);
  }
};

module.exports = { loginUser };
