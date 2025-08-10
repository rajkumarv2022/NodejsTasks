const express = require('express');

const dbconeect = require('./db/connect');

const app = express();

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
