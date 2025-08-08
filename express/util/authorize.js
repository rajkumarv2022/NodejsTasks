const authorize = (req,res,next) => {
    const {name}=req.query;

    if(name)
    {
        req.user=name;
    }

    next();

}

module.exports = authorize;