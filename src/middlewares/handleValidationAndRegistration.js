const { validationResult, body } = require("express-validator");
const { registerUser } = require("../controllers/register");

const handleValidationAndRegistration = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const validationErrors = errors.array().map((error) => ({
      field: error.param,
      message: error.msg,
    }));
    return res.status(400).json({ errors: validationErrors });
  }

  try {
    await registerUser(req, res);
  } catch (error) {
    console.error("Error during registeration", error);
    res.sendStatus(500);
  }
};

const validation = [
  body("password")
    .isLength(3)
    .withMessage("Password must be at least 3 characters long"),
  body("email").isEmail().normalizeEmail().withMessage("Invalid email address"),
];

module.exports = { validation, handleValidationAndRegistration };
