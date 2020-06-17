const router = require("express").Router();
const controller = require("../controllers/control");

router.route("/register").post(controller.register);
router.route("/login").post(controller.login);
module.exports = router;