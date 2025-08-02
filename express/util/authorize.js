const authorize = (req,res,next) => {
    const {name}=req.query;

    if(name)
    {
        req.user=name;
        console.log(req.user);
        console.log("Hii");
    }

    next();

}

module.exports = authorize;