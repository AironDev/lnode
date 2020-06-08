var User = require('../models/User');

module.exports.controller = (app) => {
		// get users page
		app.get('/users/add', (req, res) => {

			const user_resource = new User({
				name: 'Jane Doe',
				email: 'john@doe.com'
			})

			user_resource.save((error) => {
				if(error)
					msg = error;
					msg = 'Record saved successfully'
			})

			res.render('users/add', { title: 'Users', status: msg });
	})
}