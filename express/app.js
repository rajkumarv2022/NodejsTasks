const express=require('express');
const app=express();

app.get('/', (req,res) => {
    res.send(`<h1>Home Page</h1>`);
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
