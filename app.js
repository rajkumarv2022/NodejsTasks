const express=require('express');

const app=express();

const router=require('./router/router');

app.use('/api/test',router);

app.listen(3000,()=>{
    console.log('server is listning at port 3000');
})