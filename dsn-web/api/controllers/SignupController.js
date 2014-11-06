var networkHelper = require("../models/NetworkHelper.js");
var http = require('http');

module.exports = {
    processSignup: function (req, res) {
    	console.log("Make signup request");
    	var options = {
		  host: 'http://dreamyday.tk/docs/#!/user/createUser_post_1',
		  path: '/',
		  headers: {'username': req.body.username,
		  			'fullname': req.body.fullname,
		  			'email':    req.body.email,
		  			'password': req.body.password
					},

		  method: 'POST'
		};

		callback = function(response) {
		  var str = '';

		  //another chunk of data has been recieved, so append it to `str`
		  response.on('data', function (chunk) {
		    str += chunk;
		  });

		  //the whole response has been recieved, so we just print it out here
		  response.on('end', function () {
		    console.log(str);
		    return res.send(str);
		  });
		}

	  	http.request(options, callback).end();
	    //return res.send(req.body.username);
	 }
};