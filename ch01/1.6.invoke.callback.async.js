const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname + '/1.6.data.txt');
const timestamp = new Date().toString();

fs.writeFile(file, timestamp, function(err){
    if(err)throw err;

    fs.readFile(file, function(e, content){
        if(e) throw e;

        /*eslint eqeqeq: "warn"*/
        console.assert(content == timestamp);
        console.log(content);
    })
});
console.log('last line of the script');

// TODO investigate why '/' is needed for the async read/write file
