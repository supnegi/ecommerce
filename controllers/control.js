const passport = require('passport');
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
                res.send("loggedin!");
            });
        })
    }   

}
