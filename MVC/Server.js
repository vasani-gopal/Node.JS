const express = require('express');
const db = require("./config/db");
const cookieParser = require("cookie-parser");
const U_router = require("./Routes/userRouter");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// Home Route
app.get("/", (req, res) => {
    res.redirect("/user/login");
});

// Register Page
app.get("/user/register", (req, res) => {
    res.render("register");
});

// Login Page
app.get("/user/login", (req, res) => {
    res.render("login");
});

// API Routes
app.use("/user", U_router);

app.listen(8000, () => {
    console.log("server listen");
});
