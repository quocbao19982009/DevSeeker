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
          <h1 className="x-large">DevSeeker</h1>
          <p className="lead">
            DevSeeker is a place for programmers to connect, share knowladge and
            look for future partnership. Create your profile, make post and
            explore!
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
