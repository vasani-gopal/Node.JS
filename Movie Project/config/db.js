const mongoose = require("mongoose")

mongoose.connect("")

const db = mongoose.connection

db.on("connected", (err, data)=>{
    if(err){
        console.log("err")
    }
    else{
        console.log("database connect")
    }
})