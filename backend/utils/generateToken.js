import jwt from "jsonwebtoken";
import config from "config";

const generateToken = (userId) => {
  return jwt.sign({ user: { id: userId.id } }, config.get("jwtSecret"), {
    expiresIn: "30d",
  });
};

export default generateToken;
