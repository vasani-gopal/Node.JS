const passport = require('passport')
const usermodal = require('../model/usermodel')

const LocalStrategy=require('passport-local').Strategy
const LocalAuth=(passport)=>{
    passport.use(new LocalStrategy(async(username,password,done)=>{
        const user=await usermodal.findOne({username:username})
        if(!user){
            return done(null,false,{message:"user not found"})
        }
        if(user.password!=password){
            return done(null,false,{message:"Invalid password"})
        }
        return done(null,user)
    }))

    passport.serializeUser((user,done)=>{
        done(null,user.id)
    });

    passport.deserializeUser(async(id,done)=>{
        const user=await usermodal.findById(id)
        done(null,user)
    });
}

module.exports=LocalAuth