const express = require('express');
const db = require("./config/db");
const cookieParser = require("cookie-parser");
const U_router = require("./Routes/userRouter");

const passport = require('passport')
const session = require('express-session')

const app = express();

app.use(express.json());
app.use(cookieParser());

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(session({secret:'keyboard cat',resave:false,saveUninitialized:true}))
localAuth(passport)
app.use(passport.initialize())
app.use(passport.session())


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
