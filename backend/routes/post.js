const express = require("express");
const router = express.Router();

const { authUser } = require("../middlwares/auth");

const {
  createPost,
  getAllPosts,
  comment,
  savePost,
} = require("../controller/post");

router.post("/createPost", authUser, createPost);
router.get("/getAllPosts", authUser, getAllPosts);
router.put("/comment", authUser, comment);
router.put("/savePost/:id", authUser, savePost);

module.exports = router;
