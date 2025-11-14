const express = require("express")

const app = express()


app.set("view engine", "ejs")

app.use(express.urlencoded());
var student = [
    {
        "id": "1",
        "name": "Gopal"
    },
    {
        "id": "2",
        "name": "Sunil"
    }




];

app.get("/", (req, res) => {
    res.render("Home", { student })

})


app.post("/insertdata", (req, res) => {
    const { id, name } = req.body
    const obj = {
        id, name
    }
    student.push(obj)

    res.redirect("/")
})

app.get("/delete",(req,res)=>{
    const id = res.query.id
    const ans = student.filter((el,i)=>{
        return el.id !== id
    })
    student = ans
    res.redirect("/")
})





app.listen(7000, () => {
    console.log("server runing")
})