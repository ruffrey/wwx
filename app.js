
/**
 * Module dependencies.
 */

var http = require('http')
  , express = require('express')
  , routes = require('./routes')
  , controllers = require('./controllers')
  , config = require('./config')
  , engine = require('ejs-locals')
  , layoutEngine = require('express-ejs-layouts')
  , app = express();

// Configuration

app.configure(function(){
	app.set('port', config.port);
	
	app.use(express.compress({
		level: 9,
		memLevel: 9
	}));
	
	app.use(express.static(__dirname + '/public'));
	
	app.set('views', __dirname + '/views');
	app.set('view engine', 'ejs');
	app.set('layout', 'layout');
	
	
	//app.use(express.bodyParser({ keepExtensions: true}));
	//app.use(express.limit('1.5mb'));
	app.use(express.methodOverride());
	//app.use(express.cookieParser());
	
	app.use(layoutEngine);
	
	// locals
	app.use(function(req, res, next){
		res.locals.config = config;
		res.locals.meta = config.meta;
		res.locals.extractScripts = true;
		next();
	});
	
	//app.use(express.session({ secret: 'asdfjkl' }));
	app.use(app.router);
	
});

app.configure('development', function(){
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

// Routes

routes(app);

http.createServer(app).listen(app.get('port'), function(){
	console.log("wiggleware is listening on", app.get('port'));
	
});
