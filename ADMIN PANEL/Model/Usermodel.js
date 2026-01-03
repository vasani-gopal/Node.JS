const mongoose = require("mongoose");
const user = mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
})

const userData = mongoose.model("userdata", user);
module.exports = userData