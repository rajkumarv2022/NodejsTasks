const product = require('../model/product');

const getPrd = (req,res) =>
{
    res.send('hello from getPrd');
}

const createPrd = (req,res) => {

    const prd=req.body;

    product.create(prd);

    res.json(prd);

}

module.exports = {
    getPrd,
    createPrd
};