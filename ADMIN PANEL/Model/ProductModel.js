const mongoose = require("mongoose");
const product = mongoose.Schema({
    title: {
        type: String
    },
    price: {
        type: String
    }, image: {
        type: String
    },
    categoryId: {
        type: mongoose.Schema.Types.String,
        ref: "category"
    }
})

const productData = mongoose.model("productadmin", product);
module.exports = productData