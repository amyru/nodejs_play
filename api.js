var request = require('request');

request('http://google.com', function(error,response, body){

	var mangled = body.replace('google', 'darcy');
	console.log(mangled);

});