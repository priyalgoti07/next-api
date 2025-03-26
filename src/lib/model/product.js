const { default: mongoose } = require("mongoose");

const productModel = new mongoose.Schema({
    name: String,
    price: String,
    company: String,
    category: String,
    color: String,
});

export const Product = mongoose.models.products|| mongoose.model("products",productModel)