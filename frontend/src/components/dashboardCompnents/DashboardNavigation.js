import React from "react";
import { Link } from "react-router-dom";
import classes from "./DashboardNavigation.module.css";

const DashboardNavigation = () => {
  return (
    <div className={classes.dashBtn}>
      <Link to="/edit-profile" className={`${classes.btn} ${classes.light}`}>
        <i className={"fas fa-user-circle text-primary"}></i> Edit Profile
      </Link>
      <Link to="/add-experience" className={`${classes.btn} ${classes.light}`}>
        <i className={"fab fa-black-tie text-primary"}></i> Add Experience
      </Link>
      <Link to="/add-education" className={`${classes.btn} ${classes.light}`}>
        <i className={"fas fa-graduation-cap text-primary"}></i> Add Education
      </Link>
    </div>
  );
};

export default DashboardNavigation;
