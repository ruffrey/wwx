var ctrl = require('./controllers');

module.exports = exports = function(app) {
	
	
	app.get('/', ctrl.index);
	app.get('/contact', ctrl.contact);
	app.get('/sacramento-nodejs-development', ctrl.services);
	app.get('/website-consulting-portfolio-nodejs', ctrl.portfolio);
	
	app.get('*', ctrl["404"]);	
};
