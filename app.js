const express=require('express');

const notFound=require('./Middleware/NotFound');
const errorHandlerMiddleware = require('./Middleware/ErrorController/ErrorHandler');

const app=express();

const router=require('./router/router');

// app.use(express.urlencoded())
app.use(express.json());


app.use('/api/test',router);

app.use(notFound);
app.use(errorHandlerMiddleware);

app.listen(3000,()=>{
    console.log('server is listning at port 3000');
})