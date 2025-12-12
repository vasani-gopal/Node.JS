const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

const authRoutes = require('./Routes/authRoutes');
const todoRoutes = require('./Routes/todoRoutes');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use("/", authRoutes);
app.use("/", todoRoutes);

// Default Page
app.get("/", (req, res) => {
    res.redirect("/register");
});

app.listen(8000, () => {
    console.log('Server is running on http://localhost:8000');
});
