const express = require("express");
const { addMovie, editMovie, deleteMovie, getMovie } = require("../Controller/MovieController");
const M_router = express.Router();

M_router.post("/add", addMovie);
M_router.get("/all", getMovie);
M_router.patch("/:id", editMovie);
M_router.delete("/:id", deleteMovie);

module.exports = M_router;