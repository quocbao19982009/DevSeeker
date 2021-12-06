import User from "../models/userModel.js";
import bycrypt from "bcryptjs";
import { validationResult } from "express-validator";
import generateToken from "../utils/generateToken.js";
// GET /api/auth
// Get user by token
// Private
const authUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Auth user server error");
  }
};

// POST /api/auth
// Authenticate user & get token
// Public
const authLoginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }

    const isMatch = await bycrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }

    res.send({ token: generateToken(user) });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error in Auth User Login");
  }
};

export { authUser, authLoginUser };
