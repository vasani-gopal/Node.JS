const mongoose = require('mongoose')
const CategorySchema = mongoose.Schema({
    title: {
        type: String
    },
    price: {
        type: String
    },
    categoryId: {
        type: mongoose.Schema.Types.String,
        ref: 'category',
    }
})

const Categorymodal = mongoose.model("category", CategorySchema)
module.exports = Categorymodal