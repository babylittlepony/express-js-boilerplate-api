const comparePasswords = require("../helpers/comparePassword");
const { userModel } = require("../models/user");

const loginUser = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await userModel.findOne({ username });

    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const isPasswordMatch = await comparePasswords(password, user.password);

    if (isPasswordMatch) {
      next();
    } else {
      return res.status(400).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
  return res.status(200).json({ message: "Logged in" });
};

module.exports = { loginUser };
