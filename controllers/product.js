const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');
const Product = require("../models/product");

module.exports = {
    
    create : function(req, res){
        const form = new formidable.IncomingForm();
        form.keepExtensions = true;    
        form.parse(req, (err, fields, files) => {
            if (err){
                console.log(err);
                return res.send("Data parsing failed");
            }   
            const product = new Product(fields);
            if(files.photo){
                product.photo.data = fs.readFileSync(files.photo.path);
                product.photo.contentType = files.photo.type;    
            }
            product.save((err, result) => {
                if(err){
                    console.log(err);
                    return res.send("Product creation failed");
                }
                res.json(result);
            })
        })
    
    },
    
    read : function(req, res){
        req.product.photo = undefined;
        return res.json(req.product);
    },
    
    update : function(req, res){
        const form = new formidable.IncomingForm();
        form.keepExtensions = true;    
        form.parse(req, (err, fields, files) => {
            if (err){
                console.log(err);
                return res.send("Data parsing failed");
            }   
            let product = req.product;
            product = _.extend(product, fields);
            if(files.photo){
                product.photo.data = fs.readFileSync(files.photo.path);
                product.photo.contentType = files.photo.type;    
            }
            product.save((err, result) => {
                if(err){
                    console.log(err);
                    return res.send("Product updation failed");
                }
                res.json(result);
            })
        })
    },

    remove : function(req, res){
        const product = req.product;
        product.remove((err, deletedProduct) => {
            if (err){
                console.log(err);
                return res.send("Product deletion failed");
            }
            res.send("Product deletion successful");
        });
    },

    productById : function(req, res, next, id){
        Product.findById(id).exec((err, product) => {
            if (err || !product) {
                console.log(err);
                return res.send("Product identification failed");
            }
            req.product = product;
            next();
        });
    } 
     
}

