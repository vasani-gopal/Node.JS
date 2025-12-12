const { sessions } = require('../Model/userModel');

function authMiddleware(req, res, next) {
    const sid = req.cookies.session;
    if (!sid || !sessions[sid]) {
        return res.redirect('/login');
    }
    req.username = sessions[sid];
    next();
}

module.exports = authMiddleware;
