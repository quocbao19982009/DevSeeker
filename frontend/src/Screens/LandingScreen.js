import React, { useEffect } from "react";
import classes from "./LandingScreen.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
const LandingScreen = () => {
  const { isLogin } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogin) {
      navigate("/dashboard");
      return;
    }
  });

  return (
    <section className={classes.landing}>
      <div className={classes.overlay}>
        <div className={classes["landing-inner"]}>
          <h1 className="x-large">Developer Connector</h1>
          <p className="lead">
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div>
            <Link
              to="/register"
              className={`${classes.btn} ${classes["btn-primary"]}`}
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className={`${classes.btn} ${classes["btn-light"]}`}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingScreen;
