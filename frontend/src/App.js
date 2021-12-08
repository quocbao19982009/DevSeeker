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
import PrivateRoute from "./components/PrivateRoute";
import DashboardScreen from "./Screens/DashboardScreen";
import CreateProfileScreen from "./Screens/CreateProfileScreen";
import EditProfileScreen from "./Screens/EditProfileScreen";
import AddExperienceScreen from "./Screens/AddExperienceScreen";
import AddEducationScreen from "./Screens/AddEducationScreen";
import ProfilesScreen from "./Screens/ProfilesScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import PostsScreen from "./Screens/PostsScreen";
import DetailPostScreen from "./Screens/DetailPostScreen";
import NotFoundScreen from "./Screens/NotFoundScreen";

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
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <DashboardScreen />
            </PrivateRoute>
          }
        />
        <Route
          path="create-profile"
          element={
            <PrivateRoute>
              <CreateProfileScreen />
            </PrivateRoute>
          }
        />
        <Route
          path="edit-profile"
          element={
            <PrivateRoute>
              <EditProfileScreen />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="add-experience"
          element={
            <PrivateRoute>
              <AddExperienceScreen />
            </PrivateRoute>
          }
        />
        <Route
          path="add-education"
          element={
            <PrivateRoute>
              <AddEducationScreen />
            </PrivateRoute>
          }
        />
        <Route path="profiles" element={<ProfilesScreen />} />
        <Route path="profile/:id" element={<ProfileScreen />} />
        <Route
          path="/posts"
          element={
            <PrivateRoute>
              <PostsScreen />
            </PrivateRoute>
          }
        />
        <Route
          path="/posts/:id"
          element={
            <PrivateRoute>
              <DetailPostScreen />
            </PrivateRoute>
          }
        />
        <Route path="/*" element={<NotFoundScreen />} />
      </Routes>
    </>
  );
}

export default App;
