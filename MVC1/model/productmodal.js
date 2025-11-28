const mongoose=require('mongoose')
const ProductSchema=mongoose.Schema({
    title:{
        type:String
    },
    price:{
        type:String
    }
})

const Productmodal=mongoose.model("product",ProductSchema)
module.exports=Productmodal