const express = require("express")
const { register, appget, local } = require("../Controller/Blogcontroller")
const passport = require("passport")

const B_route = express.Router()
B_route.post("/add", register)
B_route.get("/", appget)

B_route.get("/login", (req, res) => {
    res.render("login")
})
B_route.post("/login", passport.authenticate("local", { successRedirect: "/todo", failureRedirect: "/blog/login" }), local)
module.exports = B_route