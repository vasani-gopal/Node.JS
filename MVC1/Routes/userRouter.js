const express=require('express')
const { Register, GetUser, EditUser, DeleteUser } = require('../Controller/userController')

const U_Router=express.Router()
U_Router.post("/register",Register)
U_Router.get("/all",GetUser)
U_Router.patch("/:id",EditUser)
U_Router.delete("/:id",DeleteUser)

module.exports=U_Router