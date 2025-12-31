const mongoose = require("mongoose")

const user = mongoose.Schema({
    Username:{
        type:"String"
    },
    Password:{
        type:"String"
    },
    Email:{
        type:"String"
    }
})

const Usermodel = mongoose.model("account",user)

module.exports = Usermodel