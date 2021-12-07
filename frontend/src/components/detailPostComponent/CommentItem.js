import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removingComment } from "../../actions/postAction";
import { Link } from "react-router-dom";
import formatDate from "../../ulits/formatDate";
import classes from "./CommentItem.module.css";

const CommentItem = ({ postId, comment }) => {
  const { userInfo: user } = useSelector((state) => state.user);
  const { _id, text, name, avatar, user: author, date } = comment;
  const dispatch = useDispatch();
  return (
    <div className={classes.post}>
      <div>
        <Link to={`/profile/${user}`}>
          <img className={classes.avatar} src={avatar} alt="" />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className={classes.text}>{text}</p>
        <p className={classes.date}>Posted on {formatDate(date)}</p>
        {!user.loading && author === user._id && (
          <button
            onClick={() => {
              dispatch(removingComment(postId, _id));
            }}
            type="button"
            className={classes.btnDelete}
          >
            <i className="fas fa-times" />
          </button>
        )}
      </div>
    </div>
  );
};

export default CommentItem;
