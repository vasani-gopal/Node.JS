const mongoose = require("mongoose")

const usermodel = mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    },
    image:{
        type:String
    }
})

const user = mongoose.model("gopal123",usermodel)

module.export = user