// set up ======================================================================
var express  = require('express');
var app      = express(); 								// create our app w/ express
var mongoose = require('mongoose'); 					// mongoose for mongodb
var port  	 = process.env.PORT || 8080; 				// set the port
//var database = require('./config/database'); 			// load the database config

var morgan = require('morgan'); 		// log requests to the console (express4)
//var bodyParser = require('body-parser'); 	// pull information from HTML POST (express4)
//var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

/*
 * configuration ===============================================================
 */
//mongoose.connect(database.url); 	// connect to mongoDB database on modulus.io

app.use(express.static(__dirname + '/public')); 				// set the static files location /public/img will be /img for users
app.use(morgan('dev')); 										// log every request to the console
//app.use(bodyParser.urlencoded({'extended':'true'})); 			// parse application/x-www-form-urlencoded
//app.use(bodyParser.json()); 									// parse application/json
//app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
//app.use(methodOverride());

// Views folder
app.set('views', './views');

/* 
 *Template Engine 
 * i.e. with handlarbars(http://expressjs-book.com/forums/topic/how-to-use-alternative-non-jade-template-engines-with-express/) 
 */
//app.engine('jade', require('ejs').renderFile);

// This is optional, but you have to specify the view files's extension if you don't it defaults to 'jade'
app.set('view engine', 'jade');

/*
 * routes (http://expressjs.com/api#router) 
 */
var routes = require('./controllers');
// apply the routes to our application
app.get('/', routes.index) 

app.get('/students/students', routes.list);
app.get('/students/:id', routes.student);

//require('./app/routes.js')(router);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);
