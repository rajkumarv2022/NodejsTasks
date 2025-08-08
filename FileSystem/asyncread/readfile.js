const fs=require('fs');

fs.readFile('file1.txt','utf-8', (err,data) => {
    if(err)
    {
        return;
    }
    console.log(data);
} )
