const express = require('express');

const dbconeect = require('./db/connect');

const app = express();

const router = require('./router/router');

app.use(express.json());

app.use('/api',router);

const start = () => {

    try
    {

        dbconeect();
        app.listen(3000, () => {

            console.log("server listening on port 3000");
        } )

    }
    catch(e)
    {
        console.log(e);
    }


}

start();

