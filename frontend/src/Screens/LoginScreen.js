import React, { useState } from "react";
import Container from "../components/layout/Container";
import classes from "./LoginScreen.module.css";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userAction";

const LoginScreen = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.user);

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sumbitHandler = (e) => {
    e.preventDefault();

    dispatch(loginUser(email, password));
  };

  if (isLogin) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <Container className={classes.register}>
      <h1>Sign In</h1>
      <p>
        <i className="fas fa-user"></i> Login Your Account
      </p>
      <form onSubmit={sumbitHandler} action="create-profile.html">
        <div className={classes["form-group"]}>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChangeHandler(e)}
          />
        </div>
        <div className={classes["form-group"]}>
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={(e) => onChangeHandler(e)}
          />
        </div>

        <button type="submit" className={classes.btn}>
          Login
        </button>
      </form>
      <p className="my-1">
        New to DevConnector? <Link to="/register">Sign Up</Link>
      </p>
    </Container>
  );
};

export default LoginScreen;
