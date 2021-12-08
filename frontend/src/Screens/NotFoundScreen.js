import React from "react";
import Container from "../components/layout/Container";
import classes from "./NotFoundScreen.module.css";

const NotFoundScreen = () => {
  return (
    <Container className={classes.notFound}>
      <h1 className={classes.lead}>
        <i className="fas fa-exclamation-triangle" /> Page Not Found
      </h1>
      <p className={classes.title}>Sorry, this page does not exist</p>
    </Container>
  );
};

export default NotFoundScreen;
