const express=require('express');
const app=express();
const path=require('path');

//const fs=require('fs');

// const data=fs.readFileSync('./files/file2.txt');

app.use(express.static('./static'));

app.get('/', (req,res) => {
    res.send(`<h1>Home Page</h1>`);
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

app.all('*', (req,res) => {
    res.status(404).send('<h1>Not Found</h1>');
} )

app.listen(5000, () => {
    console.log("server listning on port 5000");
} );
