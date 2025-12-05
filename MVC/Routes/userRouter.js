const express = require("express")
const { Register, GetUser, DeleteUser, EditUser, Login } = require("../Controller/UserController");

const U_router = express.Router()

U_router.post("/login", Login);

U_router.post("/register", Register);
U_router.get("/all", GetUser);
U_router.patch("/:id", EditUser);
U_router.delete("/:id", DeleteUser);
module.exports = U_router;