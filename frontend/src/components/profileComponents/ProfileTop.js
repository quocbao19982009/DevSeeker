import React from "react";
import classes from "./ProfileTop.module.css";

const ProfileTop = (props) => {
  const {
    profile: {
      status,
      company,
      location,
      website,
      social,
      user: { name, avatar },
    },
  } = props;
  return (
    <div className={classes.profileTop}>
      <img className="round-img my-1" src={avatar} alt="" />
      <h1 className={classes.name}>{name}</h1>
      <p className={classes.lead}>
        {status} {company && <span> at {company} </span>}
      </p>
      <p>{location && <span>{location}</span>} </p>
      <div className="icon my-1">
        {website ? (
          <a
            className={classes.socialIcon}
            href={website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-globe fa-2x" />
          </a>
        ) : null}

        {social
          ? Object.entries(social)
              //   This turn social Object into an array of [key, value] => then filter to get those that have value
              .filter(([_key, value]) => value)
              .map(([key, value]) => (
                <a
                  className={classes.socialIcon}
                  key={key}
                  href={value}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`fab fa-${key} fa-2x`}></i>
                </a>
              ))
          : null}
      </div>
    </div>
  );
};

export default ProfileTop;
