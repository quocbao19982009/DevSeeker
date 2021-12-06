import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {},
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPosts: (state, action) => {
      return { ...state, posts: action.payload, loading: false };
    },
    postError: (state, action) => {
      return { ...state, error: action.payload, loading: false };
    },
    updateLikes: (state, action) => {
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload.postId
            ? { ...post, likes: action.payload.likes }
            : post
        ),
        loading: false,
      };
    },
    deletePost: (state, action) => {
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
        loading: false,
      };
    },
    addPost: (state, action) => {
      return {
        ...state,
        posts: [...state.posts, action.payload],
        loading: false,
      };
    },
    getPost: (state, action) => {
      return { ...state, post: action.payload, loading: false };
    },
  },
});

export const {
  getPosts,
  postError,
  updateLikes,
  deletePost,
  addPost,
  getPost,
} = postSlice.actions;

export default postSlice.reducer;
