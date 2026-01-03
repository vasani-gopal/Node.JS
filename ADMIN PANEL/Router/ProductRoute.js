const express = require("express");
const { addpro, getpro, ImageUpload, categoryByproduct } = require("../Controller/ProductController");
const Pro_Route = express.Router();
const verifyToken = require("../Middleware/productAuth")

Pro_Route.get("/", verifyToken, getpro)
Pro_Route.post("/insertProduct", verifyToken, ImageUpload, addpro);
Pro_Route.get("/category/:categoryId", verifyToken, categoryByproduct)

module.exports = Pro_Route