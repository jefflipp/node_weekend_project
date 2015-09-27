//BASE SETUP
//============

var express = require('express')//call express
var app = express() //define our app using express
var ejs = require('ejs')//related to views
var bodyParser = require('body-parser')//for getting the 
var morgan = require('morgan')//for logging errors
var mongoose = require('mongoose')
var Arena = require('./app/models/Arena')//require the Arena model
var Team = require('./app/models/Team')
var arenaRouter = require('./app/routes/arenaRoutes')
var teamRouter = require('./app/routes/teamRoutes')
// var Team = require('./app/models/Team')//require the Arena model
var DB = process.env.MONGOLAB_URL || 'monodb://localhost:27017/weekend_project'
var port = process.env.PORT || 3000;

mongoose.connect('localhost:27017/weekend_project')

var arena10 = new Arena({
	name: "BofA Stadium",
	city: "Charlotte",
	hometeam: "Panthers",
	team: [team10]

});

arena10.save();
console.log( arena10 );

var team10 = new Team({
	team_name: "Saints",
	uniform_color: "Gold",
	number_wins: "0"

});

team10.save();
console.log( team10 );


// APP CONFIGURATION
// =================
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan('dev'))

// tell app to use apiRouter when we go to 
// localhost:8080/api
app.use('/arenas', arenaRouter)
app.use('/teams', teamRouter)


// RUN THE SERVER
// ==============
app.listen(3000)
console.log("server is running on port 3000")