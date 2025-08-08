let products = require('../data/products');
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

const addPrd = (req,res) => {

    const prd=req.body;

    products=[...products,prd];

    res.send(products);

}

const updatePrd = (req,res) => {

    const {id}=req.params;
    
    const product=req.body;
    
    products=products.map( (prd) => {
        
        if(prd.id===Number(id))
        {
            prd.name=product.name;
            prd.desc=product.desc;    
        }

        return prd;

    } )

    res.send("Updated Product");

}

const delPrd = (req,res) => {

    const {id}=req.params;

    products=products.filter( (prd) => {
        if(prd.id!==Number(id))
        {
            return true;
        }
    } )

    res.send("Product deleted");
}

module.exports = {
    fileread,
    webfile,
    getProduct,
    getProdById,
    addPrd,
    updatePrd,
    delPrd
};