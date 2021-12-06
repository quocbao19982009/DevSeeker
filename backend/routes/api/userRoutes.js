import express from "express";
import { registerUser } from "../../controllers/userController.js";
const router = express.Router();
import { check, validationResult } from "express-validator";

// POST api/users
// Register user
// Public

router.post(
  "/",
  check("name", "Name is required").not().isEmpty(),
  check("email", "Please enter a valid email").isEmail(),
  check("password", "Please enter a password with 6 more characters").isLength({
    min: 6,
  }),
  registerUser
);

export default router;
