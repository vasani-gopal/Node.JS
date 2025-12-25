const isAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect("/blog/login")
}

module.exports = isAuth