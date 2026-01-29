const jwt = require('jsonwebtoken');
const usermodel = require('../models/User');

const checkToken = (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    
    if (!token) {
        return res.status(401).send({ message: 'No token provided' });
    }
    
    try {
        const decoded = jwt.verify(token, 'private-key');
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).send({ message: 'Invalid token' });
    }
};

const checkRole = (roles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).send({ message: 'Authentication required' });
        }
        
        if (!roles.includes(req.user.role)) {
            return res.status(403).send({ message: 'Access denied' });
        }
        
        next();
    };
};

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const localAuth = (passport) => {
    passport.use(new LocalStrategy(async (username, password, done) => {
        const user = await usermodel.findOne({ email: username });
        
        if (!user) {
            return done(null, false, { message: 'User Not Found' });
        }
        
        const isMatch = await user.comparePassword(password);
        
        if (!isMatch) {
            return done(null, false, { message: 'Invalid Password' });
        }
        
        return done(null, user);
    }));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        const user = await usermodel.findById(id);
        done(null, user);
    });
}

module.exports = { checkToken, checkRole, localAuth };
