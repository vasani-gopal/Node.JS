const usermodel = require("../model/usermodel")
const nodemain = require("nodemailer");

//CREATE
const Register = async (req, res) => {
    const data = await usermodel.create(req.body)
    res.send(data)
}

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

const update = async (req, res) => {
    const {id} = req.params;
    let {newPassword} = req.body;
    const data=await usermodel.findByIdAndUpdate(id,{password:newPassword})
    res.send("update password",data);
}


const otp = Math.floor(Math.render()*-10000);
const transporter = nodemail.createTransport({
    service:"gmail",
    auth:{
        user:"vasanigopal2002@gmail.com",
        pass:"gopalvasanni@181002",
    },
});

const mailOption = {
    from: "vasanigopal2002@gmail.com",
    to:req.body.email,
    subject:"password change",
    html:`<p>${otp}</p>`,
}

transporter.sendMail(mailOption,function(err,info){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
    res.send("sent");
})

module.exports = { Register, GetUser, DeleteUser, EditUser, Login,update };