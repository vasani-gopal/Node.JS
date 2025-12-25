const usermodal = require("../Model/Usermodel")

const LocalStrategy = require("passport-local").Strategy;

module.exports = function (passport) {

    passport.use(new LocalStrategy(
        async (username, password, done) => {
            const user = await usermodal.findOne({ username })
            if (!user) return done(null, false)
            if (user.password !== password) return done(null, false)
            return done(null, user)
        }
    ))

    passport.serializeUser((user, done) => {
        done(null, user.id)
    })

    passport.deserializeUser(async (id, done) => {
        const user = await usermodal.findById(id)
        done(null, user)
    })
}