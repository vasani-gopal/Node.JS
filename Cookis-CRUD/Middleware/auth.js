const isauth = async(req,res,next)=>{
    console.log(req.cookies)
    const {LoggedIn} = req.cookies;
    console.log(LoggedIn)
    if(LoggedIn){
        next()
    }
    else{
        res.redirect("/")
    }
}

module.exports = isauth