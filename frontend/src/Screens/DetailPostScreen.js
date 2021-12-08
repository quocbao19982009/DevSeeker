import React, { useEffect } from "react";
import classes from "./DetailPostScreen.module.css";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Container from "../components/layout/Container";
import { gettingPostById } from "../actions/postAction";
import CommentItem from "../components/detailPostComponent/CommentItem";
import AddComment from "../components/detailPostComponent/AddComment";
import PostItemDetail from "../components/detailPostComponent/PostItemDetail";

const DetailPostScreen = () => {
  const dispatch = useDispatch();
  const postId = useParams().id;
  const postDetails = useSelector((state) => state.post.post);

  useEffect(() => {
    dispatch(gettingPostById(postId));
  }, [postId]);

  return (
    <Container>
      <Link to="/posts">
        <button className={classes.btn}>Go Back</button>{" "}
      </Link>
      {postDetails && <PostItemDetail post={postDetails} />}
      <AddComment postId={postId} />
      <div className={classes.posts}>
        {postDetails &&
          postDetails.comments.map((comment) => (
            <CommentItem key={comment._id} comment={comment} postId={postId} />
          ))}
      </div>
    </Container>
  );
};

export default DetailPostScreen;
