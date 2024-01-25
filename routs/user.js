const express = require("express");
const userController = require("../controller/userController");

const router = express.Router();

router.post("/signUp", userController.registerUser);

router.post("/signIn", userController.signInUser);

module.exports = router;