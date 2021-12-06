import React from "react";
import formatDate from "../../ulits/formatDate";
import classes from "./ProfileExperience.module.css";
const ProfileEducation = ({ education }) => {
  const { school, degree, fieldofstudy, current, to, from, description } =
    education;

  return (
    <div>
      <h3 className={classes.education}>{school}</h3>
      <p>
        {formatDate(from)} - {to ? formatDate(to) : "Now"}
      </p>
      <p>
        <strong>Degree: </strong> {degree}
      </p>
      <p>
        <strong>Field Of Study: </strong> {fieldofstudy}
      </p>
      <p>
        <strong>Description: </strong> {description}
      </p>
    </div>
  );
};

export default ProfileEducation;
