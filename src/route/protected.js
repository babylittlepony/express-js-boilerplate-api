/* Example protected route using JWT Authorization */

const router = require("express").Router();
const { authenticateToken } = require("../middlewares/authenticateToken");

const protectedRoute = router.get(
  "/protected",
  authenticateToken,
  (req, res) => {
    res.json({ message: "This is protected route.", user: req.user });
  }
);

module.exports = protectedRoute;
