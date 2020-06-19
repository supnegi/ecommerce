const router = require("express").Router();
const authControl = require("../controllers/auth");

router.route("/register").post(authControl.register);
router.route("/login").post(authControl.login);
router.route("/logout").get(authControl.logout); 
  
module.exports = router;

