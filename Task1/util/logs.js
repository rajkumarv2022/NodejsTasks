const logs = (req,res,next) => {

    console.log(req.url,req.method,Date.now());
    next();
    
}

module.exports=logs;