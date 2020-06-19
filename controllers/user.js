const User = require("../models/user");

module.exports = {

    userById : function(req, res, next, id){
        User.findById(id).exec(function(err, user){
            if(err || !user){
                return res.send(err);
            }
            req.profile = user;
            next();
        })
    },

}