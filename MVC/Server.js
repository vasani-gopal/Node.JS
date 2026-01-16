const express = require('express');
const db = require("./config/db");

const passport = require('passport')
const session = require('express-session');

const cookieParser = require("cookie-parser");
const U_router = require("./Routes/userRouter");

// const Product_Router = require('./Routes/productRouter')
// const Category_Router = require('./Routes/categoryRouter')

const user = require('./models/userModel')
// const product = require('./models/productModel')
// const category = require('./models/categoryModel')
const U_Router = require('./Routes/userRouter')

const localAuth = require('./middleware/LocalAuth');

const app = express();

app.use("/user",U_Router)
// app.use('/product', Product_Router)
// app.use('/category', Category_Router)

app.use(express.json());
app.use(cookieParser());

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(session({secret:'keyboard cat',resave:false,saveUninitialized:true}))
app.use(localAuth(passport))
app.use(passport.initialize())
app.use(passport.session())

localAuth(passport)

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
