const productData = require("../Model/ProductModel");
const multer = require("multer");
const path = require("path");
const categorydata = require("../Model/CategoryModel");

const addpro = async (req, res) => {

    const { title, price, categoryId } = req.body;
    let image = "";
    if (req.file) {
        image = req.file.path
    }

    await productData.create({
        title: title,
        price: price,
        image: image,
        categoryId: categoryId
    })
    res.redirect("/product")
}

const getpro = async (req, res) => {
    const user = await productData.find({}).populate("categoryId");
    const category = await categorydata.find({})
    res.render("product", { user, category })
}

const categoryByproduct = async (req, res) => {
    const { categoryId } = req.params
    const user = await productData.find({ categoryId }).populate("categoryId")
    const category = await categorydata.find({})
    res.render("product", { user, category })
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "upload/")
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

const ImageUpload = multer({ storage: storage }).single("image")

module.exports = { addpro, getpro, ImageUpload,categoryByproduct }