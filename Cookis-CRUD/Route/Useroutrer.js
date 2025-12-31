const express = require("express")
const {register, login, home} = require("../Controller/Usercontroller")

const isAuth = require("../Middleware/auth")

const U_router = express.Router()

U_router.post("/register", register)
U_router.post("/login",login )
U_router.get("/home", isAuth,home)

module.exports = U_router