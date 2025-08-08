const asyncWrapper = require('../Middleware/ErrorController/asyncWrapper');
const {createError} = require('../Middleware/ErrorController/ErrorCreator');

const getTest= asyncWrapper ( (req,res,next)=>{
        const {name}=req.body;
        if(name==null)
        {
            const err=createError("not found",404);
            return next(err);
        }
    
        res.send('gettest');

}

);

const createTest=(req,res)=>{
    res.send('create');
}

const updateTest=(req,res)=>{
    res.send('update');
}

const deleteTest=(req,res)=>{
    res.send('delete');
}

module.exports = {
    getTest,
    createTest,
    updateTest,
    deleteTest
};