import React, { useState } from "react";
import Container from "../components/layout/Container";
import classes from "./RegisterScreen.module.css";
import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createAlert } from "../actions/alertAction";
import { registerUser } from "../actions/userAction";
// import { registerUser } from "../actions/userAction";

const RegisterScreen = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.user);

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sumbitHandler = (e) => {
    e.preventDefault();

    if (password !== password2) {
      dispatch(createAlert("Password does not match", "danger"));
      return;
    }

    dispatch(registerUser(formData));
  };

  if (isLogin) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <Container className={classes.register}>
      <h1>Sign Up</h1>
      <p>
        <i className="fas fa-user"></i> Create Your Account
      </p>
      <form onSubmit={sumbitHandler} action="create-profile.html">
        <div className={classes["form-group"]}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            value={name}
            onChange={(e) => onChangeHandler(e)}
          />
        </div>
        <div className={classes["form-group"]}>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChangeHandler(e)}
          />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
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
        <div className={classes["form-group"]}>
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
            value={password2}
            onChange={(e) => onChangeHandler(e)}
          />
        </div>
        <button type="submit" className={classes.btn}>
          Register
        </button>
      </form>
      <p className="my-1">
        Already have an account?{" "}
        <Link to="/login" className={classes.Link}>
          Sign In
        </Link>
      </p>
    </Container>
  );
};

export default RegisterScreen;
