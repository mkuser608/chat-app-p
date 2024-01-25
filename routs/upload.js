const express = require("express");
const uploadController = require("../controller/upload.controller");

const router = express.Router(); // call router method on express

router.post("/", uploadController.save);

router.get("/:id", uploadController.show);

module.exports = router;