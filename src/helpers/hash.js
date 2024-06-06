const bcrypt = require("bcrypt");
const saltRounds = 10;

const hash = async (password) => {
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
};

module.exports = { hash };
