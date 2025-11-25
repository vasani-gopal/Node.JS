const express = require('express')
const db = require("./config/db")
const U_router = require("./Routes/userRouter")

const app = express()

app.use(express.json())

app.use("/user",U_router)


app.listen(8000, () => {
    console.log("server listen")
})