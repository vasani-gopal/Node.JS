const mongoose = require("mongoose")

const userModel = mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    }
})

const user = mongoose.model("gopal123",userModel)

module.exports = user