const express = require("express");
const app = express();
const db = require("./config/db");
const UserRoute = require("./Router/UserRoute");
const cookieParser = require("cookie-parser");
const Pro_Route = require("./Router/ProductRoute");
const multer = require("multer")
const path = require("path");
const C_Route = require("./Router/CategoryRoute");

app.use(cookieParser());
app.use("/upload", express.static(path.join(__dirname, "upload")))

app.use(express.urlencoded());
app.use(express.json());

app.set("view engine", "ejs")
app.use("/user", UserRoute);
app.use("/product", Pro_Route);
app.use("/category", C_Route)


app.listen(7000, () => {
    console.log("Server Listen")
})