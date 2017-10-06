const fs = require('fs');
const timestamp = new Date().toString();

fs.writeFile('./ch01/time.txt', timestamp, function (err){
    if(err) throw err;

    fs.readFile('./ch01/time.txt', function(err, content){
        if(err) throw err;
        console.assert(timestamp == content);
    })
});