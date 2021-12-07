import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import formatDate from "../../ulits/formatDate";
import classes from "./PostItem.module.css";
import { addLike, deletePostById, removeLike } from "../../actions/postAction";

const PostItem = ({ post }) => {
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
          <button
            onClick={() => {
              dispatch(addLike(_id));
            }}
            type="butotn"
            className={classes.btn}
          >
            <i className="fas fa-thumbs-up" />{" "}
            <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
          </button>
          <button
            onClick={() => {
              dispatch(removeLike(_id));
            }}
            type="button"
            className={classes.btn}
          >
            <i className="fas fa-thumbs-down" />
          </button>
          <Link to={`/posts/${_id}`} className={classes.btnDiscussion}>
            Discussion{" "}
            {comments.length > 0 && (
              <span className="comment-count">{comments.length}</span>
            )}
          </Link>
          {!user.loading && author === user._id && (
            <button
              onClick={() => {
                dispatch(deletePostById(_id));
              }}
              type="button"
              className={classes.btnDelete}
            >
              <i className="fas fa-times" />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default PostItem;
