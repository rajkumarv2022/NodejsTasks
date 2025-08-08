const express=require('express');
const app=express();

const logs=require('./util/logs');
const authorize=require('./util/authorize');

const prdRoute=require('./routers/products');



//const fs=require('fs');

// const data=fs.readFileSync('./files/file2.txt');

// app.use([logs,authorize]);

app.use(express.urlencoded());
app.use(express.json());

app.use('/api',prdRoute);

app.use(express.static('./static'));

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

app.all('*', (req,res) => {
    res.status(404).send('<h1>Not Found</h1>');
} )

app.listen(5000, () => {
    console.log("server listning on port 5000");
} );
