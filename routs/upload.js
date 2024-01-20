const express = require("express");
const uploadController = require("../controller/upload.controller");

const router = express.Router(); // call router method on express

router.get("/", uploadController.index);

module.exports = router;