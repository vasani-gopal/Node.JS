const { todos } = require("../Model/userModel");

exports.todoPage = (req, res) => {
    const username = req.username;
    res.render("todo", { username, list: todos[username] || [] });
};

exports.addTodo = (req, res) => {
    const username = req.username;
    const text = req.body.text;

    if (!todos[username]) todos[username] = [];
    todos[username].push(text);

    res.redirect("/todo");
};

exports.deleteTodo = (req, res) => {
    const username = req.username;
    const index = req.body.index;

    if (todos[username]) todos[username].splice(index, 1);
    res.redirect("/todo");
};
