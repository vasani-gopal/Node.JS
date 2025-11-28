const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    tital: {
        type: String
    },
    price: {
        type: Number
    },
    qty: {
        type: String
    },
    category:{
        type:String
    }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
