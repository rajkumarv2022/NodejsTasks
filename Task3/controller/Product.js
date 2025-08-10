const product = require('../model/product');

const getPrd = async (req,res) =>
{
    const prd=await product.find({});
    res.json(prd);
}

const createPrd = async (req,res) => {

    try
    {
        const prd=req.body;

        await product.create(prd);

        res.json(prd);

    }
    catch(e)
    {
        res.status(400).send(e);
    }

}

module.exports = {
    getPrd,
    createPrd
};