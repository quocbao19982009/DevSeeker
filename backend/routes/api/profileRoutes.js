import express from "express";
import { check } from "express-validator";
const router = express.Router();
import { auth } from "../../middleware/auth.js";
import checkObjectId from "../../middleware/checkObjectId.js";
import {
  getUserProfile,
  updateUserProfile,
  getAllProfile,
  getProfileById,
  deleteProfile,
  updateProfileExprience,
  deleteProfileExperience,
  updateProfileEducation,
  deleteProfileEducation,
  getProfileGithub,
} from "../../controllers/profileController.js";

// GET api/profile/me
// Get current user's profile
// Private

router.get("/me", auth, getUserProfile);

// Post api/profile/
// Create or update user profile
// Private

router.post(
  "/",
  [
    auth,
    check("status", "Status is required").not().isEmpty(),
    check("skills", "Skills is required").not().isEmpty(),
  ],
  updateUserProfile
);

// GET api/profile/
// Get all profiles
// Public
router.get("/", getAllProfile);

// DELETE api/profile
// DELETE Profile, user & posts
// Private
router.delete("/", auth, deleteProfile);

// GET api/profile/user/:user_id
// Get profile by ID
// Public
router.get("/user/:user_id", checkObjectId("user_id"), getProfileById);

// PUT api/profile/experience
// Update profile Experience
// Private

router.put(
  "/experience",
  [
    auth,
    check("title", "Title is required").not().isEmpty(),
    check("company", "Company is required").not().isEmpty(),
    check("from", "From Date is required").not().isEmpty(),
    check("location", "Location is required").not().isEmpty(),
  ],
  updateProfileExprience
);

// DELETE api/profile/experience
// DELETE profile Experience
// Private

router.delete("/experience/:exp_id", auth, deleteProfileExperience);

// PUT api/profile/education
// Update profile Education
// Private

router.put(
  "/education",
  [
    auth,
    check("school", "School is required").not().isEmpty(),
    check("degree", "Degree is required").not().isEmpty(),
    check("fieldofstudy", "Field Of Study is required").not().isEmpty(),
    check("from", "From Date is required").not().isEmpty(),
  ],
  updateProfileEducation
);

// DELETE api/profile/education
// DELETE profile education
// Private

router.delete("/education/:edu_id", auth, deleteProfileEducation);

// GET api/profile/github/:username
// Get user repos from github
// Public

router.get("/github/:username", getProfileGithub);

export default router;
