import { configureStore } from "@reduxjs/toolkit";
import setAuthToken from "./api/setAuthToken";
import alertReducer from "./slices/alertSlice";
import userReducer from "./slices/userSlice";
import profileReducer from "./slices/profileSlice";
import postReducer from "./slices/postSlice";

const store = configureStore({
  reducer: {
    alert: alertReducer,
    user: userReducer,
    profile: profileReducer,
    post: postReducer,
  },
});

let currentState = store.getState();

store.subscribe(() => {
  // keep track of the previous and current state to compare changes
  let previousState = currentState;
  currentState = store.getState();
  // if the token changes set the value in localStorage and axios headers
  if (previousState.user.token !== currentState.user.token) {
    const token = currentState.user.token;
    setAuthToken(token);
  }
});

export { store };
