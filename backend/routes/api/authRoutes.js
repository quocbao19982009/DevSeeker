import express from "express";
const router = express.Router();
import { auth } from "../../middleware/auth.js";
import { authUser, authLoginUser } from "../../controllers/authController.js";
import { check, validationResult } from "express-validator";

router.get("/", auth, authUser);
router.post(
  "/",
  check("email", "Please Include a valid email").isEmail(),
  check("password", "Password is required").exists(),
  authLoginUser
);

export default router;
