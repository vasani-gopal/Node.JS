const usermodal = require("../Model/Usermodel")

const register = async (req, res) => {
    await usermodal.create(req.body);
    res.redirect("/blog");
};
const appget = async (req, res) => {
    const data = await usermodal.find({});
    res.render("home", { data });
};

const local = (req, res) => {
    return res.render("success")
}
module.exports = { register, appget, local };