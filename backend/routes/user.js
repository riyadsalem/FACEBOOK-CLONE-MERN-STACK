const express = require("express");
const {
  register,
  activateAccount,
  login,
  auth,
} = require("../controller/user");
const { authUser } = require("../middlwares/auth");
const router = express.Router();

router.post("/register", register);
router.post("/activate", activateAccount);
router.post("/login", login);
router.post("/auth", authUser, auth);

module.exports = router;
