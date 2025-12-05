const usermodel = require("../model/usermodel")

// LOGIN
const Login = async (req, res) => {
    const { email, password } = req.body;

    const user = await usermodel.findOne({ email });

    if (!user) {
        return res.send({ message: "User Not Found" });
    }

    if (user.password !== password) {
        return res.send({ message: "Invalid Password" });
    }

    res.send({
        message: "Login Successful",
        user: user
    });
};


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

module.exports = { Register, GetUser, DeleteUser, EditUser, Login };