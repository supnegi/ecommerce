const router = require("express").Router();
const userControl = require("../controllers/user");
const authControl = require("../controllers/auth");

router.route("/secrets/:userId").get(authControl.isLogin, authControl.isAuth, authControl.isAdmin, function(req, res){
    res.json({user: req.profile})
})

router.param("userId", userControl.userById);

module.exports = router;

