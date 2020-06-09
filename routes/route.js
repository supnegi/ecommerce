const express = require("express");
const router = express.Router();
const control = require("../controllers/control")

router.route("/").get(control.home)

module.exports = router;