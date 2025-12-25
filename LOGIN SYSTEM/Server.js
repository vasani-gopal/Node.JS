const express = require("express")

const app = express()

app.set("view engine", "ejs")
const db = require("./config/db")

const B_route = require("./Router/blog")
const U_route = require("./Router/blogroute")

const cookieParser = require("cookie-parser")
const passport = require("passport")

const session = require("express-session")
const Localauth = require("./Middleware/localauth")

app.use(express.urlencoded())

app.use(session({ secret: 'Keyboard cat', resave: true, saveUninitialized: true }))
Localauth(passport)
app.use(passport.initialize())
app.use(passport.session())

app.use(cookieParser())

app.use("/blog", B_route)
app.use("/todo", U_route)

app.listen(8000, () => {
    console.log("server listen")
})