const express = require("express")
const db = require("./config/db")
const authRoutes = require("./authRoute/authRoute")

const cors = require("cors")
const app = express()
app.use(express.urlencoded())

app.use(express.json());
// app.use(core());
app.use(cors())
// app.set("view engine", "ejs")


app.use("/", authRoutes)

app.listen(8000, ()=>{
    console.log("server is listen")
})
