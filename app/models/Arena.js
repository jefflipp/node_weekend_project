//ARENAS MODEL
// grab the packages we need for the arenas model
var mongoose = require('mongoose')
var Schema = mongoose.Schema

// set up our arena schema - what do we want our arena object to look like?
var ArenaSchema = new Schema({
	name: String,
	city: String,
	date: Date,
	hometeam: String
	// away_team: [ { type: mongoose.Schema.team_name, ref: 'Team' } ]
})

var Arena = mongoose.model( 'Arena', ArenaSchema );

module.exports = Arena;