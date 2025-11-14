const express = require("express")
const db = require("./config/db")
const app = express()

app.listen(6000,()=>{
    console.log("server listen")
})