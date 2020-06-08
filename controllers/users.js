var User = require('../models/User');

module.exports.controller = (app) => {
		// get users page
		app.get('/users', (req, res) => {

			// users = User.find({'email': 'john@doe.com'}, 'email');
			User.find({}, 'name email', function (error, users) {
					if (error) { console.error(error); }
						res.send({
						users: users
					})
				})

			res.render('users/list', { title: 'Users', data : 'Airon' });
	})
}

