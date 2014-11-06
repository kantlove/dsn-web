var requestify = require('requestify');

module.exports = {
  processSignin: function (req, res) {
    console.log('Make the request');

    requestify.post('hhttp://dreamyday.tk:80/session/signin',{

      	username: req.body.username,
    	password: req.body.password
    })
    .then(function(response){
    	response.getBody();
    	console.log(response.body);
    	return res.send(response.body);

    });
  }
};