const passport = require('passport');
const jwt = require("jsonwebtoken");
const expressJwt = require('express-jwt');

const User = require("../models/user");

module.exports = {

    register : function(req, res){
        User.register({username: req.body.username}, req.body.password, function(err, user){
            if (err) {
                return res.send(err);
            }   
            passport.authenticate("local")(req, res, function(){
                    res.send("Registered!");
            })
        })
    },

    login : function(req, res){
        const user = new User({ username: req.body.username, password: req.body.password });
        req.login(user, function(err){
            if (err) {
              return res.send(err);
            } 
            passport.authenticate("local")(req, res, function(){
                //generate a signed token for authenticated user using jwt
                const token = jwt.sign({ _id: req.user._id }, "learn env");
                res.cookie('token', token, { expire: new Date() + 9999 });
                const { _id, username, role } = req.user;
                return res.json({ token, user: { _id, username, role } });
            });
        })
    },

    logout : function(req, res){
        res.clearCookie("token");
        res.send("Logged out!");
    },

    // middleware to check if user is logged in 
    isLogin : expressJwt({ secret : "learn env", userProperty : "auth" }),

    // middleware to check if user is authenticated
    isAuth : function(req, res, next){
        let user = req.profile && req.auth && req.profile._id == req.auth._id;
        if (!user) {
            return res.status(403).json({
                error: 'Access denied'
            });
        }
        next();
    },
    
    // middleware to check if user is admin
    isAdmin : function(req, res, next){
        if (req.profile.role === 0) {
            return res.send('Admin resourse! Access denied');
        }
        next();    
    }

}
