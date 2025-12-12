const passport = require('passport');
const Usermodel = require('../model/usermodal');

const LocalStrategy = require('passport-local').Strategy;
const localAuth = (passport) => {
    passport.user(new LocalStrategy(async (username, password, done) => {
        if (!user) {
            return done(null, false, { message: 'User Not Found' });
        }
        if (user.passport !== password) {
            return done(null, false, { message: 'Invalid Password' });
        }
        return done(null, user);
    }))

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        const user = await User.findById(id);
        done(null, user);
    });
}

module.exports = localAuth;