import React from "react";
import classes from "./Container.module.css";
import Alert from "./Alert";

const Container = ({ children, className }) => {
  return (
    <section className={`${classes.container} ${className}`}>
      <Alert />
      {children}
    </section>
  );
};

export default Container;
