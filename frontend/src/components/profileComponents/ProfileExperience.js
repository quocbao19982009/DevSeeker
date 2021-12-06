import React from "react";
import formatDate from "../../ulits/formatDate";
import classes from "./ProfileExperience.module.css";
const ProfileExperience = ({ experience }) => {
  const { company, title, location, current, to, from, description } =
    experience;

  return (
    <div>
      <h3 className={classes.company}>{company}</h3>
      <p>
        {formatDate(from)} - {to ? formatDate(to) : "Now"}
      </p>
      <p>
        <strong>Position: </strong> {title}
      </p>
      <p>
        <strong>Location: </strong> {location}
      </p>
      <p>
        <strong>Description: </strong> {description}
      </p>
    </div>
  );
};

export default ProfileExperience;
