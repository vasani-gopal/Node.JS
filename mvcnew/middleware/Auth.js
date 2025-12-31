const isAuth=async(req,res,next)=>{
    const id=req.cookies.data;
    if(id){
        next()
    }else{
        res.redirect('/register')
    }
}

module.exports=isAuth