const http = require('http');

http.get('http://www.example.com/', function (res) {
    console.log(res);
});