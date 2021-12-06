import React, { useEffect } from "react";
import classes from "./DetailPostScreen.module.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Container from "../components/layout/Container";
import { gettingPostById } from "../actions/postAction";
import AddPost from "../components/postsComponents/AddPost";
import PostItem from "../components/postsComponents/PostItem";
import AddComment from "../components/detailPostComponent/AddComment";

const DetailPostScreen = () => {
  const dispatch = useDispatch();
  const postId = useParams().id;
  const postDetails = useSelector((state) => state.post.post);

  //   const { _id, user, text, name, avatar, likes, comments, data } = postDetails;

  useEffect(() => {
    dispatch(gettingPostById(postId));
  }, [postId]);

  return (
    <Container>
      <h1 className={classes.title}>Posts</h1>

      <AddComment />
      <div className={classes.posts}>
        {/* {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))} */}
      </div>
    </Container>
  );
};

export default DetailPostScreen;
