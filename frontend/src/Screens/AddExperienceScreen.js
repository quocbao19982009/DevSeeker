import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addExperience } from "../actions/profileAction";
import Container from "../components/layout/Container";
import classes from "./AddExperienceScreen.module.css";

const initialState = {
  company: "",
  title: "",
  location: "",
  from: "",
  to: "",
  current: false,
  description: "",
};

const AddExperienceScreen = () => {
  const [formData, setFormData] = useState(initialState);

  const { company, title, location, from, to, current, description } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChangeHandler = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  useEffect(() => {
    if (current === true) {
      setFormData({ ...formData, to: "" });
    }
  }, [current, formData]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addExperience(formData, navigate));
  };

  return (
    <Container>
      <h1 className={classes.title}>Add An Experience</h1>
      <p className={classes.lead}>
        <i className="fas fa-code-branch"></i> Add any developer/programming
        positions that you have had in the past
      </p>
      <small>* = required field</small>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes["form-group"]}>
          <input
            value={title}
            onChange={onChangeHandler}
            type="text"
            placeholder="* Job Title"
            name="title"
            required
          />
        </div>
        <div className={classes["form-group"]}>
          <input
            value={company}
            onChange={onChangeHandler}
            type="text"
            placeholder="* Company"
            name="company"
            required
          />
        </div>
        <div className={classes["form-group"]}>
          <input
            value={location}
            onChange={onChangeHandler}
            type="text"
            placeholder="Location"
            name="location"
          />
        </div>
        <div className={classes["form-group"]}>
          <h4>From Date</h4>
          <input
            value={from}
            onChange={onChangeHandler}
            type="date"
            name="from"
          />
        </div>
        <div className={classes["form-group"]}>
          <p>
            <input
              value={current}
              onChange={() => setFormData({ ...formData, current: !current })}
              type="checkbox"
              name="current"
            />{" "}
            Current Job
          </p>
        </div>
        <div className={classes["form-group"]}>
          <h4>To Date</h4>
          <input value={to} onChange={onChangeHandler} type="date" name="to" />
        </div>
        <div className={classes["form-group"]}>
          <textarea
            value={description}
            onChange={onChangeHandler}
            name="description"
            cols="30"
            rows="5"
            placeholder="Job Description"
          ></textarea>
        </div>
        <button type="submit" className={`${classes.btn} ${classes.btnSubmit}`}>
          {" "}
          Submit{" "}
        </button>
        <Link className={`${classes.btn} ${classes.btnGoback}`} to="/dashboard">
          Go Back
        </Link>
      </form>
    </Container>
  );
};

export default AddExperienceScreen;
