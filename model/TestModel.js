const getTest=(req,res)=>{
    res.send('gettest');
}

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