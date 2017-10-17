const fs = require('fs');
const path = require('path');

const timestamp = new Date().toString();
let content = '';

const file = path.resolve(__dirname, '1.5.data.txt');

fs.writeFileSync(file, timestamp);
content = fs.readFileSync(file);

console.assert(content = timestamp);
console.log('last line of the script');