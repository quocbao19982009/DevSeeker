import api from "../api/api";
import {
  getProfile,
  getAllProfiles,
  profileError,
  clearProfile,
  getRepos,
  noRepos,
} from "../slices/profileSlice";
import { createAlert } from "./alertAction";
import { logout } from "./userAction";

export const getCurrentProfile = () => async (dispatch) => {
  try {
    const { data } = await api.get("/profile/me");

    dispatch(getProfile(data));
  } catch (error) {
    dispatch(
      profileError({
        msg: error.response.data.msg,
        status: error.response.status,
      })
    );
  }
};

export const getAllProfile = () => async (dispatch) => {
  dispatch(clearProfile());

  try {
    const { data } = await api.get("/profile");

    dispatch(getAllProfiles(data));
  } catch (error) {
    dispatch(
      profileError({
        msg: error.response.data.msg,
        status: error.response.status,
      })
    );
  }
};

export const getProfileById = (userId) => async (dispatch) => {
  try {
    const { data } = await api.get(`profile/user/${userId}`);

    dispatch(getProfile(data));
  } catch (error) {
    dispatch(
      profileError({
        msg: error.response.data.msg,
        status: error.response.status,
      })
    );
  }
};

export const getGithubRepos = (username) => async (dispatch) => {
  try {
    const { data } = await api.get(`/profile/github/${username}`);

    dispatch(getRepos(data));
  } catch (error) {
    dispatch(noRepos());
  }
};
export const createProfile =
  (formData, navigate, edit = false) =>
  async (dispatch) => {
    try {
      const { data } = await api.post("/profile", formData);

      dispatch(getProfile(data));

      dispatch(
        createAlert(edit ? "Profile Updated" : "Profile Created", "success")
      );
      if (!edit) {
        navigate("/dashboard");
      }
    } catch (error) {
      const errors = error.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(createAlert(error.msg, "danger")));
      }

      dispatch(
        profileError({
          msg: error.response.data.msg,
          status: error.response.status,
        })
      );
    }
  };

export const addExperience = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.put("/profile/experience", formData);

    dispatch(getProfile(data));

    dispatch(createAlert("Experience Added", "success"));

    navigate("/dashboard");
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(createAlert(error.msg, "danger")));
    }

    dispatch(
      profileError({
        msg: error.response.data.msg,
        status: error.response.status,
      })
    );
  }
};

export const addEducation = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.put("/profile/education", formData);

    dispatch(getProfile(data));

    dispatch(createAlert("Education Added", "success"));

    navigate("/dashboard");
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(createAlert(error.msg, "danger")));
    }

    dispatch(
      profileError({
        msg: error.response.data.msg,
        status: error.response.status,
      })
    );
  }
};

export const deleteExperience = (id) => async (dispatch) => {
  try {
    const { data } = await api.delete(`/profile/experience/${id}`);

    dispatch(getProfile(data));

    dispatch(createAlert("Experience Removed", "success"));
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(createAlert(error.msg, "danger")));
    }

    dispatch(
      profileError({
        msg: error.response.data.msg,
        status: error.response.status,
      })
    );
  }
};

export const deleteEducation = (id) => async (dispatch) => {
  try {
    const { data } = await api.delete(`/profile/education/${id}`);

    dispatch(getProfile(data));

    dispatch(createAlert("Education Removed", "success"));
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(createAlert(error.msg, "danger")));
    }

    dispatch(
      profileError({
        msg: error.response.data.msg,
        status: error.response.status,
      })
    );
  }
};

export const deleteAccount = () => async (dispatch) => {
  if (window.confirm("Are you sure? This cannot be undone")) {
    try {
      await api.delete(`/profile`);

      dispatch(clearProfile());
      dispatch(logout());
      dispatch(createAlert("Account Deleted!", "success"));
    } catch (error) {
      const errors = error.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(createAlert(error.msg, "danger")));
      }

      dispatch(
        profileError({
          msg: error.response.data.msg,
          status: error.response.status,
        })
      );
    }
  }
};
