const fs = require('fs');
const timestamp = new Date().toString();

fs.writeFileSync('./ch01/date.txt', timestamp);
let contents = fs.readFileSync('./ch01/date.txt');
console.assert(contents == timestamp);