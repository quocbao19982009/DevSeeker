import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {},
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    getProfile: (state, action) => {
      return { ...state, profile: action.payload, loading: false };
    },
    getAllProfiles: (state, action) => {
      return { ...state, profiles: action.payload, loading: false };
    },
    profileError: (state, action) => {
      return { ...state, error: action.payload, loading: false, profile: null };
    },
    clearProfile: (state) => {
      return { ...state, profile: null, repos: [] };
    },
    getRepos: (state, action) => {
      return { ...state, repos: action.payload, loading: false };
    },
    noRepos: (state) => {
      return { ...state, repos: [] };
    },
  },
});

export const {
  getProfile,
  getAllProfiles,
  profileError,
  clearProfile,
  getRepos,
  noRepos,
} = profileSlice.actions;

export default profileSlice.reducer;
