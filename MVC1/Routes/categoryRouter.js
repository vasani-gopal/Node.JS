const express=require('express')
const { addcategory, allcategory, Editcategory, Deletecategory } = require('../Controller/categoryController')

const Category_Router=express.Router()
Category_Router.post("/add",addcategory)
Category_Router.get("/all",allcategory)
Category_Router.patch("/:id",Editcategory)
Category_Router.delete("/:id",Deletecategory)

module.exports=Category_Router