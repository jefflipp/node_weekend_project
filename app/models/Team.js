//TEAMS MODEL
var mongoose = require('mongoose')
var Schema = mongoose.Schema

// set up our arena schema - what do we want our arena object to look like?
var TeamSchema = new Schema({
	team_name: String,
	uniform_color: String,
	number_wins: Number
})

var Team = mongoose.model( 'Team', TeamSchema );

module.exports = Team;