/* Hash the password using Bcrypt library */

const bcrypt = require("bcrypt");
const saltRounds = 10; // You can change this

const hash = async (password) => {
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  } catch (err) {
    throw err;
  }
};

module.exports = { hash };
