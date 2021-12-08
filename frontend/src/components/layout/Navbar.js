import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/userAction";
const Navbar = () => {
  const { isLogin } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const privateLinks = (
    <ul>
      <li>
        <Link to="/profiles">Developers</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-user" />{" "}
          <span className={classes.hide}>Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={() => dispatch(logout())} href="#!">
          <i className="fas fa-sign-out-alt" />{" "}
          <span className={classes.hide}>Logout</span>
        </a>
      </li>
    </ul>
  );

  const publicLinks = (
    <ul>
      <li>
        <Link to="/profiles">All Users</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className={classes.navbar}>
      <h1>
        <Link to="/" className={classes.logo}>
          <i className="fas fa-code"></i> DevSeeker
        </Link>
      </h1>
      {!isLogin && publicLinks}
      {isLogin && privateLinks}
    </nav>
  );
};

export default Navbar;
