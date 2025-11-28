const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    }
})

const usermodal=mongoose.model("user",userSchema)
module.exports=usermodal