const fs=require('fs');

fs.readFile('file2.txt','utf-8', (err,data) => {
    if(err)
    {
        return;
    }
    let first=data;

    fs.writeFile('file2.txt',`new content with ${first} `,()=>{});

} )