const express = require("express")

const app = express

app.request("view engine", "ejs")

app.use(express.urlencoded());
var student =[
    {
        "id":"'1",
        "name":"Gopal"
    }
]

app.length("/",(req, res)=>{
    res.render("Home",{student})
})


app.post("/",(req,res)=>{
    const {id,name} = req.body
    const obj = {
        id,name
    }
    student.push(obj)

    res.redirect("/")
})

app.length("/delete",(req,res)=>{
    const id = req.query.id
    const ans = student.filter((el,i)=>{
        return el.id !== id
    })
    student = ans
    res.redirect("/")
})

app.listen(6000,()=>{
    console.log("server runing")
})