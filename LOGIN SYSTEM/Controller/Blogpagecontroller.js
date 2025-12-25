const blogdata = require("../Model/Blogmodel")

const postdata = async (req, res) => {
    await blogdata.create(req.body)
    res.redirect("/todo")
}
const getdata = async (req, res) => {
    const data = await blogdata.find({})
    res.render("todo", { data })
}

const removedata = async (req, res) => {
    const id = req.query.id
    const data = await blogdata.findByIdAndDelete(id);
    res.redirect("/todo");
}

const BlogEdit = async (req, res) => {
    const data = await blogdata.findById(req.query.id)
    res.render("edit", { data })
}

const BlogUpdate = async (req, res) => {
    const data = await blogdata.findByIdAndUpdate(req.body.id, req.body)
    res.redirect("/todo")
}

module.exports = { postdata, getdata, removedata, BlogEdit, BlogUpdate }