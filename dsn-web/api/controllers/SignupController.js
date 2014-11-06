var networkHelper = require("../models/NetworkHelper.js");
var requestify = require('requestify');

module.exports = {
    processSignup: function (req, res) {
    	console.log("Make signup request");
    	requestify.post('http://dreamyday.tk:80/user', {
			username: req.body.username,
        	fullname: req.body.fullname,
        	email: req.body.email,
        	password: req.body.password   	
	    })
	    .then(function(response) {

	        console.log(response.getCode());
	        return res.send(response.getBody());
	    });

	 }
};
