import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addEducation } from "../actions/profileAction";
import Container from "../components/layout/Container";
import classes from "./AddEducationScreen.module.css";

const initialState = {
  school: "",
  degree: "",
  fieldofstudy: "",
  from: "",
  to: "",
  current: false,
  description: "",
};

const AddEducationScreen = () => {
  const [formData, setFormData] = useState(initialState);

  const { school, degree, fieldofstudy, from, to, current, description } =
    formData;

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
    dispatch(addEducation(formData, navigate));
  };

  return (
    <Container>
      <h1 className={classes.title}>Add An Education</h1>
      <p className={classes.lead}>
        <i className="fas fa-code-branch"></i> Add any developer/programming
        positions that you have had in the past
      </p>
      <small>* = required field</small>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes["form-group"]}>
          <input
            value={school}
            onChange={onChangeHandler}
            type="text"
            placeholder="* School or Bootcamp"
            name="school"
            required
          />
        </div>
        <div className={classes["form-group"]}>
          <input
            value={degree}
            onChange={onChangeHandler}
            type="text"
            placeholder="* Dergree or Certificate"
            name="degree"
            required
          />
        </div>
        <div className={classes["form-group"]}>
          <input
            value={fieldofstudy}
            onChange={onChangeHandler}
            type="text"
            placeholder="* Field Of Study"
            name="fieldofstudy"
            required
          />
        </div>
        <div className={classes["form-group"]}>
          <h4>* From Date</h4>
          <input
            value={from}
            onChange={onChangeHandler}
            type="date"
            name="from"
            required
          />
        </div>
        <div className={classes["form-group"]}>
          <p>
            <input
              value={current}
              onChange={() => setFormData({ ...formData, current: !current })}
              type="checkbox"
              name="current"
            />
            Still Study
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

export default AddEducationScreen;
