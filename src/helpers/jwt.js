const jwt = require("jsonwebtoken");

async function generateAccessToken(username) {
  try {
    // You can add more information besides username (id, email, etc)
    const token = await jwt.sign({ username }, process.env.TOKEN_SECRET, {
      expiresIn: "1h", // You can edit this for as long as you like
    });
    return token;
  } catch (error) {
    console.error("Error generating token:", error);
    throw error;
  }
}

module.exports = { generateAccessToken };
