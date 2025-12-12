const express = require("express");
const router = express.Router();
const todo = require("../Controller/todoController");
const authMiddleware = require("../Middleware/authMiddleware");

router.get("/todo", authMiddleware, todo.todoPage);
router.post("/todo/add", authMiddleware, todo.addTodo);
router.post("/todo/delete", authMiddleware, todo.deleteTodo);

module.exports = router;
