const express = require("express");
const router = express.Router();
const multerController = require("../controller/multerController");

router.post("/", multerController.multerController);


module.exports = router;
