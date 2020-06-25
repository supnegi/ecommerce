const router = require("express").Router();
const authC = require("../controllers/auth");
const prodC = require("../controllers/product");
const userC = require("../controllers/user");

router.route("/product/create/:userId").post(authC.isLogin, authC.isAuth, authC.isAdmin, prodC.create);
router.route("/product/:productId").get(prodC.read);
router.route("/product/:productId/:userId").put(authC.isLogin, authC.isAuth, authC.isAdmin, prodC.update);
router.route("/product/:productId/:userId").delete(authC.isLogin, authC.isAuth, authC.isAdmin, prodC.remove);

router.param("userId", userC.userById);
router.param("productId", prodC.productById);

module.exports = router;
