const router = require("express").Router();
const catC = require("../controllers/category");
const authC = require("../controllers/auth");
const userC = require("../controllers/user");

router.route("/category/create/:userId").post(authC.isLogin, authC.isAuth, authC.isAdmin, catC.create);
router.route("/category/:catId").get(catC.read);
router.route("/category/:catId/:userId").put(authC.isLogin, authC.isAuth, authC.isAdmin, catC.update);
router.route("/category/:catId/:userId").delete(authC.isLogin, authC.isAuth, authC.isAdmin, catC.remove);

router.param("userId", userC.userById);
router.param("catId", catC.catById);

module.exports = router;

