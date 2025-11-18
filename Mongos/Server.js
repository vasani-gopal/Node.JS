const express = require("express")
const db = require("./config/db")
const user = require("./usemodel/usermodel")
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set("view engine","ejs")

app.post("/insertData", async (req, res) => {
    const data = await user.create(req.body)
    res.send(data)
})

app.get("/", async (req, res) => {
    const user1 = await user.find({})
    res.send(user1)
    // res.render("home", { user1 })
})

app.listen(7000, () => {
    console.log("server listen")
})
