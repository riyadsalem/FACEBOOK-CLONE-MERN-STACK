const express = require("express");
const router = express.Router();

const { authUser } = require("../middlwares/auth");

const { createPost, getAllPosts } = require("../controller/post");

router.post("/createPost", authUser, createPost);
router.get("/getAllPosts", authUser, getAllPosts);

module.exports = router;
