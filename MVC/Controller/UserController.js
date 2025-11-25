const usermodel = require("../model/usermodel")

//CREATE
const Register = async (req, res) => {
    const data = await usermodel.create(req.body)
    res.send(data)
}

// READ (GET all)
const GetUser = async (req, res) => {
    const data = await usermodel.find();
    res.send(data);
};

// DELETE
const DeleteUser = async (req, res) => {
    const data = await usermodel.findByIdAndDelete(req.params.id);
    res.send({ message: "User Deleted", data });
};

// EDIT
const EditUser = async (req, res) => {
    const id = req.params.id;
    const data = await usermodel.findByIdAndUpdate(id, req.body, { new: true });
    res.send(data);
};

module.exports = { Register, GetUser, DeleteUser, EditUser };