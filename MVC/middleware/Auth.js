const isAuth = async(req,res,next)=>{
    const {id} = req.cookies;
    if(id){
        next()
    }
    else{
        res.redirect("/user/register")
    }
}

module.exports = isAuth