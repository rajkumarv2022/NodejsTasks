const fs=require('fs');

fs.writeFileSync('file2.txt',' This is append',{flag:'a'});