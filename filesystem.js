
var fs = require('fs');

var text = fs.readFileSync( "helloworld.txt", 'utf-8' );

console.log(text);