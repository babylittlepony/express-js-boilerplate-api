const mongoose = require("mongoose");

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}

/* Event Listener */
mongoose.connection.on("disconnected", () =>
  console.log("MongoDB disconnected")
);
mongoose.connection.on("reconnected", () => console.log("MongoDB reconnected"));

module.exports = connectToDatabase;
