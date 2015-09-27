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

// function create(req, res){
// 	console.log("Request: " + req.body["date"]);
// 	var arena = new Arena()
// 	arena.name = req.body.name
// 	arena.city = req.body.city
// 	arena.hometeam = req.body.hometeam
// 	// team.away_team = req.body.away_team


// 	arena.save(function(err){
// 		// if there's an error, send back a response with an error message
// 		if(err) return res.json({message: "there is an error", error:err})
		
// 		// if there's not an error, report that an arena has been successfully created
// 		res.json({message: "new arena created!"})
// 	})
// }


// function show(req,res){
// 	Arena.findById(req.params.arena_id, function(err, arena){
// 		if(err) res.send(err)
// 		res.json(arena)
// 	})
// }

// function update(req, res){
// 	// grab the user from the database
// 	Arena.findById(req.params.arena_id, function(err, arena){
// 		// if there's an error, tell the user
// 		if(err) {
// 			res.send(err)
// 		}
// 		// if the payload has a name, set the found user's name to be equal to it
// 		if(req.body.name){
// 			arena.name = req.body.name
// 		}
// 		// do the same with the city
// 		if(req.body.city){
// 			arena.city = req.body.city
// 		}
// 		// ..and with the hometeam
// 		if(req.body.hometeam){
// 			arena.hometeam = req.body.hometeam
// 		}
// 		// now we've changed the found arena, we must remember to save it back to the DB!
// 		arena.save(function(err){
// 			if(err){
// 				res.send(err)
// 			}
// 			res.json({message: "arena updated"})
// 		})
// 	})
// }

// function destroy(req, res){
// 	// delete the user with the id in the url
// 	Arena.remove({_id: req.params.arena_id}, function(err, arena){
// 		// tell the user if there is an error
// 		if(err){
// 			res.send(err)
// 		}
// 		// else, send a success message
// 		res.json({message: "deleted"})
// 	})
// }

module.exports = {
	index: index
	// create: create,
	// show: show,
	// update: update,
	// destroy: destroy
}
