const Category = require("../models/category");

module.exports = {

    create : function(req, res){
        const category = new Category(req.body);
        category.save(function(err, data){
            if (err){
                console.log(err);
                return res.send("Category creation failed");
            }
            res.send(data)
        });
    },

    read : function(req, res){
        return res.json(req.category);
    },

    update : function(req, res){
        const category = req.category;
        category.name = req.body.name;
        category.save(function(err, data){
            if (err){
                console.log(err);
                return res.send("Category updation failed");
            }
            res.send(data)
        });
    },

    remove : function(req, res){
        const category = req.category;
        category.remove((err, data) => {
            if (err) {
                console.log(err);
                return res.send("Category deletion failed")
            }
            res.json("Category deletion successful");
        });
    },

    catById : function(req, res, next, id){
        Category.findById(id).exec((err, category) => {
            if (err || !category) {
                console.log(err);
                return res.send("Product identification failed");
            }
            req.category = category;
            next();
        });
    } 

}

