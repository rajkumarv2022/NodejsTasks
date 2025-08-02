const express=require('express');
const app=express();
const path=require('path');

const logs=require('./util/logs');
const authorize=require('./util/authorize');

const products=require('./data/products');



//const fs=require('fs');

// const data=fs.readFileSync('./files/file2.txt');

app.use([logs,authorize]);

// app.use(express.static('./static'));

app.get('/', (req,res) => {
    if(req.user!=null)
    {
        return res.send(`<h1>Hello ${req.user} This is Home Page</h1>`);
    }
    res.status(401).send('<h1>Not Authorized</h1>');
})

app.get('/about', (req,res) => {
    res.send(`<h1>About Page</h1>`);
} )

app.get('/fileread', (req,res) => {
    console.log(__dirname);
    res.sendFile(path.resolve(__dirname,'./files/file2.txt'));
} )

app.get('/webfile', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./static/index.html'));
} )

app.get('/products', (req,res) => {

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

app.get('/products/:id', (req,res) => {

    const {id}=req.params;

    const product=products.find((prd)=>{ return prd.id===Number(id) });

    if(product==null)
    {
        return res.status(404).send('<h1>Product Not Found</h1>');
    }

    res.send(product);
    
} )

app.all('*', (req,res) => {
    res.status(404).send('<h1>Not Found</h1>');
} )

app.listen(5000, () => {
    console.log("server listning on port 5000");
} );
