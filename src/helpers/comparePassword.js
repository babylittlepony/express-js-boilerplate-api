const bcrypt = require("bcrypt");

async function comparePasswords(reqPassword, dbPassword) {
  try {
    return await bcrypt.compare(reqPassword, dbPassword);
  } catch (err) {
    console.error("Error comparing passwords:", err.message);
    throw err;
  }
}

module.exports = comparePasswords;
