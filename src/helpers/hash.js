const bcrypt = require("bcrypt");
const saltRounds = 10;
const password = "Admin@123";

export const hash = bcrypt
  .hash(password, saltRounds)
  .then((hash) => {
    console.log("Hash ", hash);
  })
  .catch((err) => console.error(err.message));
