import React from "react";
import classes from "./ProfileAbout.module.css";

const ProfileAbout = (props) => {
  const {
    profile: {
      bio,
      skills,
      user: { name },
    },
  } = props;

  return (
    <div className={classes.profileAbout}>
      {bio && (
        <>
          <h2 className={classes.title}>{name.trim().split(" ")[0]}'s Bio</h2>
          <p>{bio}</p>
          <div className={classes.line} />
        </>
      )}
      <h2 className={classes.title}>Skill Set</h2>
      <div className={classes.skills}>
        {skills.map((skill, index) => (
          <div key={index} className="p-1">
            <i className="fas fa-check" /> {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileAbout;
