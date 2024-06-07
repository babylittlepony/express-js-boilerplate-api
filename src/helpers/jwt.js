const jwt = require("jsonwebtoken");

async function generateAccessToken(username) {
  try {
    // You can add more information besides username (id, email, etc)
    const token = await jwt.sign({ username }, process.env.TOKEN_SECRET, {
      expiresIn: "1hr", // You can edit this for as long as you like
    });
    return token;
  } catch (error) {
    console.error("Error generating token:", error);
    return res.status(500).json({ message: "Error generating token" });
  }
}

module.exports = { generateAccessToken };
