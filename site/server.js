var  fs = require('fs');
var http = require('http');

http.createServer(function(request,response){

response.writeHead(200, {"Content-Type": 'text/html'});
var text = fs.readFileSync( './pages/home.html', 'utf8');
response.end(text); //closes connection

}).listen(1337, '127.0.01'); //port number

console.log('Server is running at http://127.0.0.1:1337');