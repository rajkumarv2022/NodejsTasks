const product = require('../model/product');

const getPrd = async (req,res) =>
{
    const queryObject={};

    const{name,sort}=req.query;
    console.log(req.query);

    if(name)
    {
        queryObject.name=name;
    }

    let result=product.find(queryObject);

    if(sort)
    {
        const field={};

        sort.split(',').forEach((ele) => {
            field[ele]=1
        })
        //console.log(field);
        //const field={'name' : 1,'price':1};
        result.sort(field).select('name price');
        //result.sort(field)
         
    }

    prd=await result;

    res.json(prd);
}

const createPrd = async (req,res) => {

        const prd=req.body;

        await product.create(prd);

        res.json(prd);

}

module.exports = {
    getPrd,
    createPrd
};