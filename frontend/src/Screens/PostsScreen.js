import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../actions/postAction";
import Container from "../components/layout/Container";
import classes from "./PostsScreen.module.css";
import PostItem from "../components/postsComponents/PostItem";
import AddPost from "../components/postsComponents/AddPost";

const PostsScreen = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <Container>
      <h1 className={classes.title}>Posts</h1>
      <p className={classes.lead}>
        <i className="fas fa-user" /> Welcome to the community
      </p>
      <AddPost />
      <div className={classes.posts}>
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </Container>
  );
};

export default PostsScreen;
