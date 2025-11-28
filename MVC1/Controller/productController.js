const Productmodal = require("../model/productmodal")

const addProduct = async (req, res) => {
    const data = await Productmodal.create(req.body)
    res.send(data)
}

const allproduct = async (req, res) => {
    const data = await Productmodal.find().populate("categoryId")
    res.send(data)
}

const Deleteproduct = async (req, res) => {
    const data = await Productmodal.findByIdAndDelete(req.params.id)
    res.send("success", data)
}

const Editproduct = async (req, res) => {
    const id = req.params.id
    const data = await Productmodal.findByIdAndUpdate(id, req.body)
    res.send("success", data)
}

module.exports = { addProduct, allproduct, Deleteproduct, Editproduct }