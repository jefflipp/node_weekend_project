//TEAMS CONTROLLER

var Team = require("../models/Team")

function index(req, res){
	console.log( "got here first team" )
	Team.find(function(err,teams){
		if(err) { 
			res.send(err)
		} else {
			console.log( "Got here team")
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
		if(err) return res.json({message: "there is a team error", error:err})
		
		// if there's not an error, report that an arena has been successfully created
		res.json({message: "new team created!"})
	})
}


// function show(req,res){
// 	User.findById(req.params.user_id, function(err, user){
// 		if(err) res.send(err)
// 		res.json(user)
// 	})
// }

// function update(req, res){
// 	// grab the user from the database
// 	User.findById(req.params.user_id, function(err, user){
// 		// if there's an error, tell the user
// 		if(err) {
// 			res.send(err)
// 		}
// 		// if the payload has a name, set the found user's name to be equal to it
// 		if(req.body.name){
// 			user.name = req.body.name
// 		}
// 		// do the same with the username
// 		if(req.body.username){
// 			user.username = req.body.username
// 		}
// 		// ..and with the password
// 		if(req.body.password){
// 			user.password = req.body.password
// 		}
// 		// now we've changed the found user, we must remember to save it back to the DB!
// 		user.save(function(err){
// 			if(err){
// 				res.send(err)
// 			}
// 			res.json({message: "user updated"})
// 		})
// 	})
// }

// function destroy(req, res){
// 	// delete the user with the id in the url
// 	User.remove({_id: req.params.user_id}, function(err, user){
// 		// tell the user if there is an error
// 		if(err){
// 			res.send(err)
// 		}
// 		// else, send a success message
// 		res.json({message: "deleted"})
// 	})
// }

module.exports = {
	index: index,
	create: create
	// show: show,
	// update: update,
	// destroy: destroy
}
