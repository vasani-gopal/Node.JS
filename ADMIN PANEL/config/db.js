const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/panel")

const db = mongoose.connection;

db.on("connected",(err,data)=>{
    if(err){
        console.log("Error")
    }else{
        console.log("Database Is Connected")
    }
})