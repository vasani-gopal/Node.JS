const User = require("../model/usermodel");
const nodemailer = require('nodemailer')
const jwt=require('jsonwebtoken')
const Register = async (req, res) => {
    try {
        const data = await User.create(req.body);
        res.send(data);
        console.log(data)
    } catch (err) {
        res.send(err.message);
    }
};

const GetUser = async (req, res) => {
    const data = await User.find();
    res.send(data);
};

const DeleteUser = async (req, res) => {
    const data = await User.findByIdAndDelete(req.params.id);
    res.send("Deleted Successfully");
};

const EditUser = async (req, res) => {
    const id = req.params.id;
    const data = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.send(data);
    console.log(data)
};

const Login = async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
        return res.send("User Not Found");
    }

    if (user.password !== password) {
        return res.send("Wrong Password");
    }

    if (user && user.password == password) {
        let payload = {
            username: user.username,
            password: user.password,
            id: user.id
        }

        let token = jwt.sign(payload, "private-key")
        console.log(token)
    
        return res.cookie("token",token).send("logged in")
    }
    return res
        .cookie("userId", user._id)
        .send("Login Successful");
};

const verifyToken=(req,res)=>{
    // console.log(req.headers.authorization)
    let token=req.headers.authorization.split(' ')[1];
    let decoded=jwt.verify(token,'private-key')
    return res.send(decoded)
}

const local = (req, res) => {
    return res.send('logged successfull')
}

const Home = (req, res) => {
    res.render("Home")
}

const forpassword = async (req, res) => {
    const { id } = req.params;
    let { newpassword } = req.body;
    const data = await User.findByIdAndUpdate(id, { password: newpassword })
    res.send(data)
}

const otp = Math.floor(Math.random() * 10000)
const mail = (req, res) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "smitpanchal3770@gmail.com",
            pass: "vzlvutviopbbjojz",
        },
    });

    const mailOption = {
        from: "smitpanchal3770@gmail.com",
        to: req.body.email,
        subject: "password change",
        html: `<P>${otp}</P>`,
    }

    transporter.sendMail(mailOption, (err, data) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log(data)
        }
        res.send("send")
    })
}


module.exports = { Register, GetUser, DeleteUser, EditUser, Login, Home, local, mail, forpassword,verifyToken };
