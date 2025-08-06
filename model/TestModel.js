const asyncWrapper = require('../Middleware/ErrorController/asyncWrapper');

const getTest= asyncWrapper ( (req,res)=>{

        const error = new Error('Not Found');
        error.status=500;
        throw error;
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