const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.send("not Login")
    }

    const decoded = jwt.verify(token, "private-key");
    req.user = decoded;
    next()
};

module.exports = verifyToken