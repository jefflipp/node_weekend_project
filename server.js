//BASE SETUP
//============

var express = require('express')//call express
var app = express() //define our app using express
var ejs = require('ejs')//related to views
var bodyParser = require('body-parser')//for getting the 
var morgan = require('morgan')//for logging errors
var mongoose = require('mongoose')
var Arena = require('./app/models/Arena')//require the Arena model
// var Team = require('./app/models/Team')//require the Arena model
DB = 'mongodb://localhost:27017/weekend_project' // connects our local db on port 27017
var DB = process.env.MONGOLAB_URL || 'monodb://localhost:27017/weekend_project'
port = process.env.PORT || 3000;

mongoose.connect('localhost:27017/weekend_project')









// RUN THE SERVER
// ==============
app.listen(3000)
console.log("server is running on port 3000")