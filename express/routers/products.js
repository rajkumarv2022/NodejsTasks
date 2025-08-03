const express=require('express');
const router=express.Router();

const path=require('path');

const products=require('../data/products');

router.get('/fileread', (req,res) => {
    console.log(__dirname);
    res.sendFile(path.resolve(__dirname,'./files/file2.txt'));
} )

router.get('/webfile', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./static/index.html'));
} )

router.get('/products', (req,res) => {

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

} )

router.get('/products/:id', (req,res) => {

    const {id}=req.params;

    const product=products.find((prd)=>{ return prd.id===Number(id) });

    if(product==null)
    {
        return res.status(404).send('<h1>Product Not Found</h1>');
    }

    res.send(product);
    
} )

module.exports=router;