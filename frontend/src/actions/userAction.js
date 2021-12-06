import { userLoaded, loginSuccess, userLogout } from "../slices/userSlice";
import api from "../api/api";
import { createAlert } from "./alertAction";

// Load user in the begining but something is still wrong because I haven't sent the token
export const loadUser = () => async (dispatch) => {
  try {
    const { data } = await api.get("/auth");

    dispatch(userLoaded(data));
  } catch (error) {
    dispatch(logout());
  }
};

export const loginUser = (email, password) => async (dispatch) => {
  const body = { email, password };

  try {
    const { data } = await api.post("/auth", body);

    dispatch(loginSuccess(data));

    dispatch(loadUser());
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      console.log(errors);
      errors.forEach((error) => dispatch(createAlert(error.msg, "danger")));
    }

    dispatch(logout());
  }
};

export const registerUser = (formData) => async (dispatch) => {
  try {
    const { data } = await api.post("/users", formData);

    dispatch(loginSuccess(data));
    dispatch(loadUser());
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(createAlert(error.msg, "danger")));
    }

    dispatch(logout());
  }
};

export const logout = () => userLogout();
