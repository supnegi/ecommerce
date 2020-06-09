const express = require("express");
const router = express.Router();
const control = require("../controllers/control")

router.route("/signup").post(control.signup)

module.exports = router;