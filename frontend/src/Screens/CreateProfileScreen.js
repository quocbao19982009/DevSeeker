import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/layout/Container";
import classes from "./CreateProfileScreen.module.css";
import { createProfile } from "../actions/profileAction";
import { useDispatch } from "react-redux";
const initialState = {
  company: "",
  website: "",
  location: "",
  status: "",
  skills: "",
  githubusername: "",
  bio: "",
  twitter: "",
  facebook: "",
  linkedin: "",
  youtube: "",
  instagram: "",
};

const CreateProfileScreen = () => {
  const dispatch = useDispatch();
  // const { profile } = useSelector((state) => state.profile);
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;

  const [displaySocial, setDisplaySocial] = useState(false);

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSumbitHandler = (e) => {
    e.preventDefault();
    dispatch(createProfile(formData, navigate));
  };
  return (
    <Container>
      <h1 className={classes.title}>Create Your Profile</h1>
      <p className={classes.lead}>
        <i className="fas fa-user"></i> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>
      <form className={classes.form}>
        <div className={classes["form-group"]}>
          <select name="status" value={status} onChange={onChangeHandler}>
            <option value="0">* Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
          <small className={classes["form-text"]}>
            Give us an idea of where you are at in your career
          </small>
        </div>
        <div className={classes["form-group"]}>
          <input
            onChange={onChangeHandler}
            value={company}
            type="text"
            placeholder="Company"
            name="company"
          />
          <small className={classes["form-text"]}>
            Could be your own company or one you work for
          </small>
        </div>
        <div className={classes["form-group"]}>
          <input
            onChange={onChangeHandler}
            value={website}
            type="text"
            placeholder="Website"
            name="website"
          />
          <small className={classes["form-text"]}>
            Could be your own or a company website
          </small>
        </div>
        <div className={classes["form-group"]}>
          <input
            onChange={onChangeHandler}
            value={location}
            type="text"
            placeholder="Location"
            name="location"
          />
          <small className={classes["form-text"]}>
            City & state suggested (eg. Boston, MA)
          </small>
        </div>
        <div className={classes["form-group"]}>
          <input
            onChange={onChangeHandler}
            value={skills}
            type="text"
            placeholder="* Skills"
            name="skills"
          />
          <small className={classes["form-text"]}>
            Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
          </small>
        </div>
        <div className={classes["form-group"]}>
          <input
            onChange={onChangeHandler}
            value={githubusername}
            type="text"
            placeholder="Github Username"
            name="githubusername"
          />
          <small className={classes["form-text"]}>
            If you want your latest repos and a Github link, include your
            username
          </small>
        </div>
        <div className={classes["form-group"]}>
          <textarea
            onChange={onChangeHandler}
            value={bio}
            placeholder="A short bio of yourself"
            name="bio"
          ></textarea>
          <small className={classes["form-text"]}>
            Tell us a little about yourself
          </small>
        </div>

        <div className={classes.social}>
          <button
            type="button"
            onClick={() => {
              setDisplaySocial(!displaySocial);
            }}
            className={classes.btn}
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>
        {displaySocial && (
          <>
            <div className={classes["social-Input"]}>
              <i className="fab fa-twitter fa-2x"></i>
              <input
                onChange={onChangeHandler}
                value={twitter}
                type="text"
                placeholder="Twitter URL"
                name="twitter"
              />
            </div>

            <div className={classes["social-Input"]}>
              <i className="fab fa-facebook fa-2x"></i>
              <input
                onChange={onChangeHandler}
                value={facebook}
                type="text"
                placeholder="Facebook URL"
                name="facebook"
              />
            </div>

            <div className={classes["social-Input"]}>
              <i className="fab fa-youtube fa-2x"></i>
              <input
                onChange={onChangeHandler}
                value={youtube}
                type="text"
                placeholder="YouTube URL"
                name="youtube"
              />
            </div>

            <div className={classes["social-Input"]}>
              <i className="fab fa-linkedin fa-2x"></i>
              <input
                onChange={onChangeHandler}
                value={linkedin}
                type="text"
                placeholder="Linkedin URL"
                name="linkedin"
              />
            </div>

            <div className={classes["social-Input"]}>
              <i className="fab fa-instagram fa-2x"></i>
              <input
                onChange={onChangeHandler}
                value={instagram}
                type="text"
                placeholder="Instagram URL"
                name="instagram"
              />
            </div>
          </>
        )}

        <button
          type="submit"
          className={classes.btnSubmit}
          onClick={onSumbitHandler}
        >
          {" "}
          Submit{" "}
        </button>
        <Link className={classes.btnGoBack} to="/dashboard">
          Go Back
        </Link>
      </form>
    </Container>
  );
};

export default CreateProfileScreen;
