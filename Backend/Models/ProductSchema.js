const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
    Product_Name: {
        type: String,
        required: true
    },
    Product_Price: {
        type: Number,
        required: true
    },
    Product_Image: [String],
    Product_Description: {
        type: String,
        required: true
    }
}, { timestamps: true }) // This Will Automatically add createdAt and UpdatedAt Fields

const ProductModel = mongoose.model("ProductModel", ProductSchema)
module.exports = ProductModel