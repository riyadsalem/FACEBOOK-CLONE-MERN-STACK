const express = require("express");
const router = express.Router();

const { authUser } = require("../middlwares/auth");

const { createPost } = require("../controller/post");

router.post("/createPost", authUser, createPost);

module.exports = router;
