const express = require("express");
const { Register, GetUser, EditUser, DeleteUser, Login, Home, local, mail, forpassword, verifyToken } = require("../Controller/UserController");
const isAuth = require("../middleware/Auth");
const passport = require("passport");

const U_router = express.Router();

U_router.post("/register", Register);
U_router.get("/all", GetUser);
U_router.patch("/:id", EditUser);
U_router.delete("/:id", DeleteUser);
U_router.post("/login", Login);
U_router.get("/",isAuth,Home)
U_router.post('/mail',mail)
U_router.post('/:id',forpassword)
U_router.post('/local',passport.authenticate('local'),local)
U_router.post('/verify',verifyToken)
module.exports = U_router;
