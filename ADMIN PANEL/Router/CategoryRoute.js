const express = require("express");
const { addcat, getcat } = require("../Controller/CategotyController");

const C_Route = express.Router();
C_Route.post("/", addcat)
C_Route.get("/", getcat)
module.exports = C_Route 