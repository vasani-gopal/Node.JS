const express = require("express");

const {
    createProduct,
    getAllproduct,
    updateProduct,
    deleteproduct
} = require("../controller/productController");
const P_router = express.Router();

// Routes
P_router.post("/", createProduct);
P_router.get("/", getAllproduct);
P_router.patch("/:id", updateProduct);
P_router.delete("/:id", deleteproduct);

module.exports = P_router;




// const express=require('express')
// const { addProduct, allproduct, Editproduct, Deleteproduct } = require('../Controller/productController')

// const Product_Router=express.Router()
// Product_Router.post("/add",addProduct)
// Product_Router.get("/all",allproduct)
// Product_Router.patch("/:id",Editproduct)
// Product_Router.delete("/:id",Deleteproduct)

// module.exports=Product_Router