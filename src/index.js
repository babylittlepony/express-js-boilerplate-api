const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const port = 3000;
const app = express();

app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
  } catch (error) {
    console.log(error);
  }
}

mongoose.connection.on("connected", () => console.log("MongoDB connected"));
mongoose.connection.on("disconnected", () =>
  console.log("MongoDB disconnected")
);
mongoose.connection.on("reconnected", () => console.log("MongoDB reconnected"));
mongoose.connection.on("disconnecting", () =>
  console.log("MongoDB disconnecting...")
);
