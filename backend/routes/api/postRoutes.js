import express from "express";
const router = express.Router();
import { auth } from "../../middleware/auth.js";
import {
  createPost,
  getAllPost,
  getPostById,
  deletePostById,
  likePost,
  unlikePost,
  createCommentPost,
  deleteCommentPost,
} from "../../controllers/postController.js";
import { check } from "express-validator";
import checkObjectId from "../../middleware/checkObjectId.js";

// POST api/posts
// Create a Post
// Private
router.post(
  "/",
  [auth, check("text", "Text is required").not().isEmpty()],
  createPost
);

// Get api/posts
// get all Post
// Private
router.get("/", auth, getAllPost);

// Get api/posts/:id
// get post by ID
// Private
router.get("/:id", checkObjectId("id"), auth, getPostById);

// DELETE api/posts/:id
// DELETE post by ID
// Private
router.delete("/:id", checkObjectId("id"), auth, deletePostById);

// PUT api/posts/like/:id
// like a post
// Private
router.put("/like/:id", checkObjectId("id"), auth, likePost);

// PUT api/posts/unlike/:id
// unlike a post
// Private
router.put("/unlike/:id", checkObjectId("id"), auth, unlikePost);

// POST api/posts/comment/:id
// Comment a post
// Private
router.post(
  "/comment/:id",
  check("text", "Text is required").not().isEmpty(),
  checkObjectId("id"),
  auth,
  createCommentPost
);

// PUT api/posts/unlike/:id
// unlike a post
// Private
router.delete(
  "/comment/:id/:comment_id",
  checkObjectId("id"),
  checkObjectId("comment_id"),
  auth,
  deleteCommentPost
);

export default router;
