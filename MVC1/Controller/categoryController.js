const Categorymodal = require("../model/categorymodal")

const addcategory = async (req, res) => {
    const data = await Categorymodal.create(req.body)
    res.send(data)
}

const allcategory = async (req, res) => {
    const data = await Categorymodal.find()
    res.send(data)
}

const Deletecategory = async (req, res) => {
    const data = await Categorymodal.findByIdAndDelete(req.params.id)
    res.send("success", data)
}

const Editcategory = async (req, res) => {
    const id = req.params.id
    const data = await Categorymodal.findByIdAndUpdate(id, req.body)
    res.send("success", data)
}

module.exports = { addcategory, allcategory, Deletecategory, Editcategory }