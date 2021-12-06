import Navbar from "./components/layout/Navbar";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router";

import LandingScreen from "./Screens/LandingScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import LoginScreen from "./Screens/LoginScreen";
import { useEffect } from "react";
import setAuthToken from "./api/setAuthToken";
import { store } from "./store";
import { loadUser, logout } from "./actions/userAction";
import DashboardScreen from "./Screens/DashboardScreen";
import CreateProfileScreen from "./Screens/CreateProfileScreen";
import EditProfileScreen from "./Screens/EditProfileScreen";
import AddExperienceScreen from "./Screens/AddExperienceScreen";
import AddEducationScreen from "./Screens/AddEducationScreen";
import ProfilesScreen from "./Screens/ProfilesScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import PostsScreen from "./Screens/PostsScreen";
import DetailPostScreen from "./Screens/DetailPostScreen";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());
    window.addEventListener("storage", () => {
      if (!localStorage.token) {
        store.dispatch(logout());
        navigate("/login");
      }
    });
  });
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="register" element={<RegisterScreen />} />
        <Route path="login" element={<LoginScreen />} />
        <Route path="dashboard" element={<DashboardScreen />} />
        <Route path="create-profile" element={<CreateProfileScreen />} />
        <Route path="edit-profile" element={<EditProfileScreen />} />
        <Route path="add-experience" element={<AddExperienceScreen />} />
        <Route path="add-education" element={<AddEducationScreen />} />
        <Route path="profiles" element={<ProfilesScreen />} />
        <Route path="profile/:id" element={<ProfileScreen />} />
        <Route path="/posts" element={<PostsScreen />} />
        <Route path="/posts/:id" element={<DetailPostScreen />} />
      </Routes>
    </>
  );
}

export default App;
