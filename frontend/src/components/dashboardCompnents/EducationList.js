import React from "react";
import classes from "./EducationList.module.css";
import formatDate from "../../ulits/formatDate";
import { deleteEducation } from "../../actions/profileAction";
import { useDispatch } from "react-redux";

const EducationList = ({ education }) => {
  const dispatch = useDispatch();

  return (
    <>
      <h2 className={classes.title}>Education Credentials</h2>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>School</th>
            <th className={classes.hide}>Degree</th>
            <th className={classes.hide}>Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {education.map((edu) => (
            <tr key={edu._id}>
              <td>{edu.school}</td>
              <td className={classes.hide}>{edu.degree}</td>
              <td className={classes.hide}>
                {formatDate(edu.from)} - {edu.to ? formatDate(edu.to) : "Now"}
              </td>
              <td className={classes.btnfunc}>
                <button
                  onClick={() => dispatch(deleteEducation(edu._id))}
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

export default EducationList;
