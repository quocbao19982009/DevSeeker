import React from "react";
import classes from "./ExperienceList.module.css";
import formatDate from "../../ulits/formatDate";
import { deleteExperience } from "../../actions/profileAction";
import { useDispatch } from "react-redux";

const ExperienceList = ({ experience }) => {
  const dispatch = useDispatch();
  return (
    <>
      <h2 className={classes.title}>Experience Credentials</h2>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Company</th>
            <th className={classes.hide}>Title</th>
            <th className={classes.hide}>Years</th>
          </tr>
        </thead>
        <tbody>
          {experience.map((exp) => (
            <tr key={exp._id}>
              <td>{exp.company}</td>
              <td className={classes.hide}>{exp.title}</td>
              <td>
                {formatDate(exp.from)} - {exp.to ? formatDate(exp.to) : "Now"}
              </td>
              <td>
                <button
                  onClick={() => dispatch(deleteExperience(exp._id))}
                  className={classes.btn}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ExperienceList;
