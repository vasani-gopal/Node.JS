const express = require("express")

const db = require("./config/db")
const U_router = require("./Route/Useroutrer")

const cookieParser = require("cookie-parser")
const session = require("express-session")

const app = express()

app.set("view engine", "ejs")

app.use(express.urlencoded())

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }))
app.use(cookieParser())


app.use(U_router)

app.get("/", (req, res) => {
    res.render("register")
})

app.get("/login", (req, res) => {
    res.render("login")
})



app.listen(7000, () => {
    console.log("Server Is Working")
})