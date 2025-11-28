const usermodal = require("../model/usermodal")

const Register = async (req, res) => {
    const data = await usermodal.create(req.body)
    res.send(data)
}

const GetUser = async (req, res) => {
    const data = await usermodal.find()
    res.send(data)
}

const DeleteUser = async (req, res) => {
    const data = await usermodal.findByIdAndDelete(req.params.id)
    res.send("success", data)
}

const EditUser = async (req, res) => {
    const id = req.params.id
    const data = await usermodal.findByIdAndUpdate(id, req.body)
    res.send("success", data)
}

module.exports = { Register, GetUser, DeleteUser, EditUser }