const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/blogApp") 

const db=mongoose.connection;

db.on("connected",(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("database connect")
    }
})
