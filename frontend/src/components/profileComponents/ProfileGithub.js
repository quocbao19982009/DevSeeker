import React, { useEffect } from "react";
import { getGithubRepos } from "../../actions/profileAction";
import { useSelector, useDispatch } from "react-redux";
import classes from "./ProfileGithub.module.css";

const ProfileGithub = ({ username }) => {
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.profile.repos);
  useEffect(() => {
    dispatch(getGithubRepos(username));
  }, [dispatch, username]);

  return (
    <div className={classes.profileGithub}>
      <h2 className={classes.title}>Github Repos</h2>
      {repos.map((repo) => (
        <div key={repo.id} className={classes.repo}>
          <div>
            <h4>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </h4>
            <p>{repo.description}</p>
          </div>
          <div>
            <ul>
              <li className={classes.star}>Stars: {repo.stargazers_count}</li>
              <li className={classes.watcher}>
                Watchers: {repo.watchers_count}
              </li>
              <li className={classes.fork}>Forks: {repo.forks_count}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileGithub;
