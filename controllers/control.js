const User = require("../models/user");

module.exports.signup = function(req, res)
{
    console.log(req.body)
    User.register({username:req.body.name}, req.body.password , function(err, user) {
        if (err) {
            return res.send(err)
        }    
        res.send(user)
    })

}
//Note : Passport local expects a "username" field 