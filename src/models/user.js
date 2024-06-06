const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
});

user = mongoose.model("User", userSchema);
module.exports = { user };
