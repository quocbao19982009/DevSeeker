import api from "./api";

const setAuthToken = (token) => {
  if (token) {
    // Have to check this again because Authorization take Bearer TOKEN not only token
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    localStorage.setItem("token", token);
  } else {
    delete api.defaults.headers.common["Authorization"];
    localStorage.removeItem("token");
  }
};

export default setAuthToken;
