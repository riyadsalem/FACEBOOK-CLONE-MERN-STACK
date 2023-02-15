const express = require("express");
const router = express.Router();

const { authUser } = require("../middlwares/auth");
const imageUpload = require("../middlwares/imageUpload");

const { uploadImages, listImages } = require("../controller/upload");

router.post("/uploadImages", authUser, imageUpload, uploadImages);
router.post("/listImages", authUser, listImages);

module.exports = router;
