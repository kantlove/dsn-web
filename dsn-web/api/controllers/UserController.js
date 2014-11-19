module.exports = {
	login: function(req,res){
		var bcrypt= require('bcrypt');

		User.findOnebyUsername(req.body.username).done(function(err,user){
			if (err) res.json({erro: 'DB error'},500);

			if (user) {
				bcrypt.compare(req.body.password, user.password, function(err,match)
				{
				if (err) res.json({error: 'Server error'},500);
				if (match){
				req.session.user = user.id;
				res.json(user);
			}
			else {
				if (req.session.user) req.session.user = null;
				res.json({error: 'Invalid password'},400);
			}
		});
	} else{
		res.json({error: 'User not found'},404)
	}
  });
}
};