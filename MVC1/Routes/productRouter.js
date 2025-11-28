const express=require('express')
const { addProduct, allproduct, Editproduct, Deleteproduct } = require('../Controller/productController')

const Product_Router=express.Router()
Product_Router.post("/add",addProduct)
Product_Router.get("/all",allproduct)
Product_Router.patch("/:id",Editproduct)
Product_Router.delete("/:id",Deleteproduct)

module.exports=Product_Router