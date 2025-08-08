const {CustomError} = require('./ErrorCreator');

const errorController = (err,req,res,next) => {

    if(err instanceof CustomError)
    {
        return res.status(err.statusCode).json({msg : err.message});
    }

    return res.status(500).json({err:err.stack});
}

module.exports = errorController;