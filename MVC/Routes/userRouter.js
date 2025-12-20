const express = require("express")
const U_router = express.Router()
const { Register, GetUser, DeleteUser, EditUser, Login, update } = require("../Controller/UserController");
const passport = require("passport");
const localAuth  = require("../middleware/Auth");

// UI Route — Register Page
U_router.get("/register", (req, res) => {
    res.render("register");
});

// UI Route — Login Page
U_router.get("/login", (req, res) => {
    res.render("login");
});


U_router.post("/login", Login);
U_router.post("/register", Register);

U_router.get("/all", GetUser);
U_router.patch("/:id", EditUser);
U_router.delete("/:id", DeleteUser);
U_router.post("/update/:id",update);

U_router.post("/mail",mail)

U_RouterRouter.post('/login',passport.authenticate('local'),localAuth)

module.exports = U_router;