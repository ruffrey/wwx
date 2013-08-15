
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
	app.use(express.compress({
		level: 9,
		memLevel: 9
	}));
	app.use(express.static(__dirname + '/public'));
	app.set('views', __dirname + '/views');
	app.set('view engine', 'ejs');
	//app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.cookieParser());
	//app.use(express.session({ secret: 'asdfjkl' }));
	app.use(app.router);
});

app.configure('development', function(){
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

// Routes

app.get('/', routes.index);
app.get('/contact', routes.contact);
app.get('/sacramento-nodejs-development', routes.workstuff);


app.listen(process.env.VCAP_APP_PORT || 3000, function(){
	console.info("\n  listening at http://localhost:%d in %s mode\n"
	   ,app.address().port
	   ,app.settings.env
	);
});
