var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	require('./landing')(view, locals);
	require('./how_it_works')(view, locals);
	require('./about')(view, locals);
	require('./contact')(view, locals);
	require('./notes')(view, locals);

	// Render the view
	view.render('index');
};
