const products = require('../data/products');
const path=require('path');

const fileread = (req,res) => {
    console.log(__dirname);
    res.sendFile(path.resolve(__dirname,'./files/file2.txt'));
};

const webfile = (req,res) => {
    res.sendFile(path.resolve(__dirname,'./static/index.html'));
};

const getProduct = (req,res) => {

    const {name}=req.query;

    if(name)
    {

        let product=products.filter( (prd) => {
            return prd.name.startsWith(name);
        } )

        product=product.map( (prd) => {
            const{id,name}=prd;
            return {id,name};
        } )

        if(product.length<1)
        {
            return res.send('<h1>Product Not Found</h1>');
        }

        return res.send(product);

    }

    const product=products.map( (prd) => {
        const {id,name}=prd;
        return {id,name};
    } )

    res.json(product);

}

const getProdById = (req,res) => {

    const {id}=req.params;

    const product=products.find((prd)=>{ return prd.id===Number(id) });

    if(product==null)
    {
        return res.status(404).send('<h1>Product Not Found</h1>');
    }

    res.send(product);
    
}

module.exports = {
    fileread,
    webfile,
    getProduct,
    getProdById
};