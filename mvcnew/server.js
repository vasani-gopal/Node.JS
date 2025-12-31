const express = require('express')
const db = require("./config/db")
const U_router = require('./Routes/userRouter')
const cookieParser=require('cookie-parser')
const path=require('path')
const session=require('express-session')
const LocalAuth = require('./middleware/LocalAuth')
const passport = require('passport')

const app = express()

app.use(session({secret:'keyboard cat',resave:true,saveUninitialized:true}));
LocalAuth(passport)
app.use(passport.initialize())
app.use(passport.session())

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")


app.get('/register',(req,res)=>{
    res.render('register')
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.use("/user",U_router)

app.listen(8100, () => {
    console.log("listen 8100")
})