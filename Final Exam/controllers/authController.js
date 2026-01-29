const usermodel = require("../models/User")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const Login = async (req, res) => {
    const { email, password } = req.body;

    const user = await usermodel.findOne({ email });

    if (!user) {
        return res.send({ message: "User Not Found" });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
        return res.send({ message: "Invalid Password" });
    }

    let payload = {
        username: user.username,
        email: user.email,
        role: user.role,
        id: user._id,
    }

    let token = jwt.sign(payload, "private-key")

    return res.cookie("token", token).redirect('/articles')
}

const Register = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;
        
        const hashedPassword = bcrypt.hashSync(password, 10);
        
        const data = await usermodel.create({
            username,
            email,
            password: hashedPassword,
            role
        });
        
        res.redirect('/login');
    } catch (error) {
        res.status(500).send({ message: "Registration failed", error: error.message });
    }
}

const Logout = (req, res) => {
    res.clearCookie("token").redirect('/')
}

const verifyToken = (req, res) => {
    let token = req.headers.authorization.split(" ")[1];
    let decoded = jwt.verify(token, "private-key")
    return res.send(decoded)
}

module.exports = { Login, Register, Logout, verifyToken }
