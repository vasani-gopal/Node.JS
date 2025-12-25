const mongoose = require("mongoose")
const user = mongoose.Schema({
    title: {
        type: String
    },
    category: {
        type: String
    },
    discription: {
        type: String
    }
})
const blogdata = mongoose.model("local", user)
module.exports = blogdata