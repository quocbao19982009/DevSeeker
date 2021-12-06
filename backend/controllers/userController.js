import bcrypt from "bcryptjs";
import gravatar from "gravatar";
import { validationResult } from "express-validator";
import normalizeUrl from "normalize-url";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

export const registerUser = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    //   if has to return or it will continue running
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ errors: [{ msg: "User Already exits" }] });
    }

    const avatar = normalizeUrl(
      gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm",
      }),
      { forceHttp: true }
    );

    user = new User({
      name,
      email,
      avatar,
      password,
    });

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();

    res.send({ token: generateToken(user) });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};
