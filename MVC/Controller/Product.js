const productModel = require("../model/ProductModel")
const Productmodal = require("../model/productmodal")

const addProduct = async (req, res) => {
    const data = await Productmodal.create(req.body)
    res.send(data)
}

const getProduct = async (req, res) => {
    const data = await Productmodal.find().populate("categoryId")
    res.send(data)
}

const deleteProduct = async (req, res) => {
    const data = await productModel.findByIdAndDelete(req.params.id);
    res.send("Product Deleted");
};

const Editproduct = async (req, res) => {
    const id = req.params.id
    const data = await Productmodal.findByIdAndUpdate(id, req.body)
    res.send("success", data)
}


module.exports = { addProduct, getProduct, deleteProduct, Editproductw }