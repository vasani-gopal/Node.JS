const express = require('express')
const db = require("./config/db")
const multer = require("multer")
const path = require("path")
const user = require("./usemodel/usermodel")

const app = express()

app.use("/upload", express.static(path.join(__dirname, "upload")));

app.use(express.join())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.ori)
    }
})

const upload = multer({ storage: storage }).single("image")


// app.post('/insertdata', imageupload, async(req,res)=>{
//     const {username, password} = req.body
//     let image = ""
//     if(req.file){
//         image = req.file.path
//     }await user.create({
//         username,
//         password,
//         image
//     }).then((data)=>{
//         console.log(data)
//     }).catch((err)=>{
//         console.log(err)
//     })
// })

// app.post('/insertdata', imageupload, async(req,res)=>{
//     const {username, password} = req.body
//     let image = "";
//     if(req.file){
//         image = req.file.body
//     }await user.create({
//         username,
//         password,
//         image
//     }).then((data)=>{
//         console.log(data)
//     }).catch((err)=>{
//         console.log(err)
//     })
// })


// app.post('/insertdata', imageupdate,async(req,res)=>{
//     const {username,password} = req.body
//     let image = ""
//     if(req.file){
//         image = req.file.path
//     }await user.create({
//         username,
//         password,
//         image
//     }).then((data)=>{
//         console.log(data)
//     }).catch((err)=>{
//         console.log(err)
//     })
// })


// app.get('/', async(req,res)=>{
//     await user.find({}).then((data)=>{
//         res.render("home",{data})
//     }).catch((err)=>{
//         console.log(err)
//     })
// })

// app.get('/', async(req,res)=>{
//     await user.find({}).then((data)=>{
//         res.render("home",{data})
//     }).catch((err)=>{
//         console.log(err)
//     })
// })


// app.get('/', async(req,res)=>{
//     await user.find({}).then((data)=>{
//         res.render("home",{data})
//     }).catch((err)=>{
//         console.log(err)
//     })
// })

// app.get('/', async(req,res)=>{
//     await user.find({}).then((data)=>{
//         res.render("home", {data})
//     }).catch((err)=>{
//         console.log(err)
//     })
// })