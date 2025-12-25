const mongoose = require("mongoose")
const modal = mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
})
const usermodal = mongoose.model("blog", modal)
module.exports = usermodal