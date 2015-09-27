//TEAMS CONTROLLER

var Team = require("../models/Team")

function index(req, res){
	console.log( "got here first" )
	Team.find(function(err,teams){
		if(err) { 
			res.send(err)
		} else {
			console.log( "Got here")
		res.json(teams)
	  }
	})
}

function create(req, res){
	
	var team = new Team()
	team.team_name = req.body.team_name
	team.uniform_color = req.body.uniform_color
	team.number_wins = req.body.number_wins
	// team.away_team = req.body.away_team


	team.save(function(err){
		// if there's an error, send back a response with an error message
		if(err) return res.json({message: "there is an error", error:err})
		
		// if there's not an error, report that an arena has been successfully created
		res.json({message: "new team created!"})
	})
}


function show(req,res){
	Team.findById(req.params.team_id, function(err, team){
		if(err) res.send(err)
		res.json(team)
	})
}

function update(req, res){
	// grab the user from the database
	Team.findById(req.params.team_id, function(err, team){
		// if there's an error, tell the user
		if(err) {
			res.send(err)
		}
		// if the payload has a name, set the found user's name to be equal to it
		if(req.body.team_name){
			team.team_name = req.body.team_name
		}
		// do the same with the city
		if(req.body.uniform_color){
			team.uniform_color = req.body.uniform_color
		}
		// ..and with the hometeam
		if(req.body.number_wins){
			team.number_wins = req.body.number_wins
		}
		// now we've changed the found arena, we must remember to save it back to the DB!
		team.save(function(err){
			if(err){
				res.send(err)
			}
			res.json({message: "team updated"})
		})
	})
}

function destroy(req, res){
	// delete the user with the id in the url
	Team.remove({_id: req.params.team_id}, function(err, team){
		// tell the user if there is an error
		if(err){
			res.send(err)
		}
		// else, send a success message
		res.json({message: "team deleted"})
	})
}

module.exports = {
	index: index,
	create: create,
	show: show,
	update: update,
	destroy: destroy
}
