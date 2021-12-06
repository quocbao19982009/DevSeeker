import React from "react";
import { useSelector } from "react-redux";
import classes from "./Alert.module.css";

const Alert = () => {
  const alerts = useSelector((state) => state.alert);

  return (
    <div>
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className={`${classes.alert} ${classes[`alert-${alert.alertType}`]}`}
        >
          {alert.msg}
        </div>
      ))}
    </div>
  );
};

export default Alert;
