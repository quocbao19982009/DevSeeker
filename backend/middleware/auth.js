import jwt from "jsonwebtoken";
import config from "config";

const auth = async (req, res, next) => {
  let token;

  const authorization = req.header("Authorization");
  if (!authorization) {
    return res.status(401).json({ msg: "No Token, authorization denied" });
  }

  if (authorization && authorization.startsWith("Bearer")) {
    try {
      token = authorization.split(" ")[1];

      const decoded = jwt.verify(token, config.get("jwtSecret"));

      req.user = decoded.user;
      // send back user id in req.user
      next();
    } catch (error) {
      res.status(401).json({ msg: "Not authorized, token is not valid" });
    }
  }
};

export { auth };
