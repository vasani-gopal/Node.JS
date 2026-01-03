const userData = require("../Model/Usermodel")
const jwt = require("jsonwebtoken")

const register = async (req, res) => {
    await userData.create(req.body);
    res.redirect("/user")
}

const GetData = async (req, res) => {
    const data = await userData.find({});
    res.render("Register", { data })
}

const login = async (req, res) => {
    const { username, password } = req.body;

    const data = await userData.findOne({ username });

    if (!data) {
        return res.send("Username not matched");
    }

    if (data.password !== password) {
        return res.send("Password incorrect");
    }

    const payload = {
        id: data._id,
        username: data.username
    };

    const token = jwt.sign(payload, "private-key");
    res.cookie("token", token);

    return res.redirect("/product");
};



module.exports = { register, GetData, login }