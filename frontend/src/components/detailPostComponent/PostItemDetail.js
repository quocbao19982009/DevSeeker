import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import formatDate from "../../ulits/formatDate";
import classes from "./PostItemDetail.module.css";
import { addLike, deletePostById, removeLike } from "../../actions/postAction";

const PostItemDetail = ({ post }) => {
  const dispatch = useDispatch();
  const { _id, text, name, avatar, user: author, likes, comments, date } = post;
  const { userInfo: user } = useSelector((state) => state.user);

  return (
    <>
      <div className={classes.post}>
        <div>
          <Link to={`/profile/${author}`}>
            <img className={classes.avatar} src={avatar} alt="" />
            <h4>{name}</h4>
          </Link>
        </div>
        <div>
          <p className={classes.text}>{text}</p>
          <p className={classes.date}>Posted on {formatDate(date)}</p>
        </div>
      </div>
    </>
  );
};

export default PostItemDetail;
