module.exports = {

	attributes: {

		username: {
			type: 'string'
		},

		password: {
			type: 'string'
		},
	},
	beforeCreate: function(attrs,next){
		var bcrypt = require('bcrypt');
		bcrypt.genSalt(10, function(err,salt){
			if (err) return next(err);

			bcrypt.hash(attrs.password,salt,function(err,hash){
				if (err) return next(err);
				attrs.password=hash;
				next();
			});
		});
	}
};