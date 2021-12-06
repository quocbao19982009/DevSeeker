import React from "react";
import Container from "../components/layout/Container";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentProfile } from "../actions/profileAction";
import Spinner from "../components/layout/Spinner";
import classes from "./DashboardScreen.module.css";
import DashboardNavigation from "../components/dashboardCompnents/DashboardNavigation";
import ExperienceList from "../components/dashboardCompnents/ExperienceList";
import EducationList from "../components/dashboardCompnents/EducationList";
import { deleteAccount } from "../actions/profileAction";

const DashboardScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogin, userInfo = {} } = useSelector((state) => state.user);
  const { profile, loading } = useSelector((state) => state.profile);

  const { experience = [], education = [] } =
    !loading && profile !== null && profile;

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
      return;
    }
    dispatch(getCurrentProfile());
  }, [isLogin, dispatch, navigate]);

  return (
    <Container>
      <Spinner loading={loading}></Spinner>
      <h1 className={classes.title}>Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome {userInfo.name}
      </p>
      {profile !== null ? (
        <>
          <DashboardNavigation />
          <ExperienceList experience={experience || []} />
          <EducationList education={education || []} />
          <button
            onClick={() => dispatch(deleteAccount())}
            className={classes.btn}
          >
            <i className="fas fa-user-minus" /> Delete My Account
          </button>
        </>
      ) : (
        <>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to="/create-profile" className={classes.btn}>
            Create Profile
          </Link>
        </>
      )}
    </Container>
  );
};

export default DashboardScreen;
