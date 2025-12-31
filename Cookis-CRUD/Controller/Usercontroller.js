const usermodel = require("../Model/Usermodel")

const register = async(req,res)=>{
    const data = await usermodel.create(req.body)
    return res.send(data)
}

const login = async(req,res)=>{
    const {Username, Password} = req.body
    let data = await usermodel.findOne({Username:Username})

    if(!data){
        return res.send("Username Is Not Find")
    }

    if(data.Password != Password){
        return res.send("Password Not match")
    }

  
    return res.cookie("LoggedIn",data._id).send("Logged In")
}

const home = (req,res)=>{
    res.render("home")
}

module.exports = {register, login, home}