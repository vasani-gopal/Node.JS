const categorydata = require("../Model/CategoryModel")

const addcat = async (req, res) => {
    await categorydata.create(req.body);
    res.redirect("/category")
}

const getcat = async (req, res) => {
    const data = await categorydata.find({});
    res.render("Category", { data })
}

module.exports = { addcat, getcat }