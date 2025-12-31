const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/Data")

const db = mongoose.connection

db.on("connected", ()=>{
    console.log("Connction ")
})