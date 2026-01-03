const express = require("express");
const { register, GetData, login } = require("../Controller/UserController");

const UserRoute = express.Router();

UserRoute.post("/insertData", register);
UserRoute.get("/", GetData);
UserRoute.get("/login",(req,res)=>{
    res.render("login")
})
UserRoute.post("/login", login);
UserRoute.get("/product", (req, res) => {
    res.render("product")
});


module.exports = UserRoute