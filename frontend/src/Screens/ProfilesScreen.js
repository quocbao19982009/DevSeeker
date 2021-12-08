import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProfile } from "../actions/profileAction";
import ProfileItem from "../components/ProfileItem";
import Container from "../components/layout/Container";
import Spinner from "../components/layout/Spinner";
import classes from "./ProfilesScreen.module.css";
const ProfilesScreen = () => {
  const dispatch = useDispatch();

  const { profiles, loading } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getAllProfile());
  }, [dispatch]);

  return (
    <Container>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1 className={classes.title}>Users</h1>
          <p className={classes.lead}>
            {" "}
            <i className="fab fa-connectdevelop" /> Browse and connect with
            fellow Job Seekers
          </p>

          <div>
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No Profile Found...</h4>
            )}
          </div>
        </>
      )}
    </Container>
  );
};

export default ProfilesScreen;
