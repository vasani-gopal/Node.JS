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
