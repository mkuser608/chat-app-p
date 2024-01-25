const express = require("express");
const uploadController = require("../controller/upload.controller");

const router = express.Router(); // call router method on express

router.post("/", uploadController.save);

router.patch("/:id", uploadController.update);

router.get("/all", uploadController.getAll);

router.get("/:id", uploadController.show);

router.delete("/:id", uploadController.Delete);

module.exports = router;