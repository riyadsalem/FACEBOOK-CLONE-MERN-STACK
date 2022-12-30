const express = require("express");
const router = express.Router();

const { authUser } = require("../middlwares/auth");
const imageUpload = require("../middlwares/imageUpload");

const { uploadImages } = require("../controller/upload");

router.post("/uploadImages", authUser, imageUpload, uploadImages);

module.exports = router;
