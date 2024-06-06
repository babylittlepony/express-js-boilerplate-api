require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoutes = require("./route/routes");
const connectToDatabase = require("./controllers/db");

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());

userRoutes(app);

connectToDatabase().then(() => {
  app.listen(port, () => console.log(`Server listening on port ${port}`));
});
