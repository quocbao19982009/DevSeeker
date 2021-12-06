import React, { useEffect } from "react";
import Spinner from "../components/layout/Spinner";
import { getProfileById } from "../actions/profileAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Container from "../components/layout/Container";
import { Link } from "react-router-dom";
import classes from "./ProfileScreen.module.css";
import ProfileTop from "../components/profileComponents/ProfileTop";
import ProfileAbout from "../components/profileComponents/ProfileAbout";
import ProfileExperience from "../components/profileComponents/ProfileExperience";
import ProfileEducation from "../components/profileComponents/ProfileEducation";
import ProfileGithub from "../components/profileComponents/ProfileGithub";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.profile);
  const user = useSelector((state) => state.user);
  const params = useParams();
  const profileId = params.id;

  console.log("profile", profile);
  console.log("user", user);
  useEffect(() => {
    dispatch(getProfileById(profileId));
  }, [dispatch, profileId]);

  return (
    <Container>
      {profile === null ? (
        <Spinner />
      ) : (
        <>
          <Link className={classes.btnBack} to="/profiles">
            Back to Profile
          </Link>
          {user.isLogin &&
            user.loading === false &&
            user.userInfo._id === profileId && (
              <Link to="/edit-profile" className="btn btn-dark">
                Edit Profile
              </Link>
            )}
          <div class={classes.profileContainer}>
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />
            <div className={classes.profileExperience}>
              <h2 className={classes.title}>Experience</h2>
              {profile.experience.length > 0 ? (
                <>
                  {profile.experience.map((experience) => (
                    <ProfileExperience
                      key={experience._id}
                      experience={experience}
                    />
                  ))}
                </>
              ) : (
                <h4>No experience credentials</h4>
              )}
            </div>

            <div className={classes.profileEducation}>
              <h2 className={classes.title}>Education</h2>
              {profile.education.length > 0 ? (
                <>
                  {profile.education.map((education) => (
                    <ProfileEducation
                      key={education._id}
                      education={education}
                    />
                  ))}
                </>
              ) : (
                <h4>No education credentials</h4>
              )}
            </div>

            {profile.githubusername && (
              <ProfileGithub username={profile.githubusername} />
            )}
          </div>
        </>
      )}
    </Container>
  );
};

export default ProfileScreen;
