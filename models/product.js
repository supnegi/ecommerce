const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const productSchema = new mongoose.Schema(
    {
        name: String,
        description: String,
        price: Number,
        category: {
            type: ObjectId,
            ref: "Category",
            required : true
        },
        quantity: Number,
        sold: {
            type: Number,
            default: 0
        },
        photo: {
            data: Buffer,
            contentType: String
        },
        shipping: Boolean
    }
);

module.exports = mongoose.model("Product", productSchema);
