import api from "../api/api";
import {
  deletePost,
  getPosts,
  postError,
  updateLikes,
  getPost,
} from "../slices/postSlice";
import { createAlert } from "./alertAction";

export const getAllPosts = () => async (dispatch) => {
  try {
    const { data } = await api.get("/posts");

    dispatch(getPosts(data));
  } catch (error) {
    dispatch(
      postError({
        msg: error.response.data.msg,
        status: error.response.status,
      })
    );
  }
};

export const addLike = (postId) => async (dispatch) => {
  try {
    const { data } = await api.put(`/posts/like/${postId}`);

    dispatch(updateLikes({ postId, likes: data }));
  } catch (error) {
    postError({
      msg: error.response.data.msg,
      status: error.response.status,
    });
  }
};

export const removeLike = (postId) => async (dispatch) => {
  try {
    const { data } = await api.put(`/posts/unlike/${postId}`);

    dispatch(updateLikes({ postId, likes: data }));
  } catch (error) {
    postError({
      msg: error.response.data.msg,
      status: error.response.status,
    });
  }
};

export const deletePostById = (postId) => async (dispatch) => {
  if (window.confirm("Are you sure? This cannot be undone")) {
    try {
      await api.delete(`/posts/${postId}`);

      dispatch(deletePost(postId));

      dispatch(createAlert("Post Removed", "success"));
    } catch (error) {
      postError({
        msg: error.response.data.msg,
        status: error.response.status,
      });
    }
  }
};

export const addingPost = (formData) => async (dispatch) => {
  try {
    const { data } = await api.post("/posts", formData);

    dispatch(getAllPosts());

    dispatch(createAlert("Post Created", "success"));
  } catch (error) {
    postError({
      msg: error.response.data.msg,
      status: error.response.status,
    });
  }
};

export const gettingPostById = (postId) => async (dispatch) => {
  try {
    const { data } = await api.get(`/posts/${postId}`);

    dispatch(getPost(data));
  } catch (error) {
    postError({
      msg: error.response.data.msg,
      status: error.response.status,
    });
  }
};
