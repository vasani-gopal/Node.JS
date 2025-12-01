const express = require('express')

const db = require("./config/db")
const user = require("./Model/BookModel")
const B_router = require("./Routes/BookRoutes")

const app = express()
app.use (express0json())
app.use(('/user', R_router))

app.listen(4000, ()=>{
    console.log("server listen")
})