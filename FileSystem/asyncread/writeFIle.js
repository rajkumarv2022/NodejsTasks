const fs=require('fs');

fs.readFile('file1.txt','utf-8', (err,data) => {
    if(err)
    {
        return;
    }
    console.log(data);
} )

fs.writeFile('file2.txt','Hello guys this is write operation', (err,data) => {
    if(err)
    {
        return;
    }
    console.log("data written succesfully");
} );