//ARENAS MODEL
// grab the packages we need for the arenas model
var mongoose = require('mongoose')
var Schema = mongoose.Schema

// set up our arena schema - what do we want our arena object to look like?
var ArenaSchema = new Schema({
	name: String,
	city: String,
	hometeam: String,
	team: [ { type: mongoose.Schema.ObjectId, ref: 'Team' } ]
})

var Arena = mongoose.model( 'Arena', ArenaSchema );

module.exports = Arena;