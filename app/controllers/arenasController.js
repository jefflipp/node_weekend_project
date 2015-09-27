//ARENAS CONTROLLER

//test this test pull

var Arena = require("../models/Arena")

function index(req, res){
	console.log( "got here first" )
	Arena.find(function(err,arenas){
		if(err) { 
			res.send(err)
		} else {
			console.log( "Got here")
		res.json(arenas)
	  }
	})
}

function create(req, res){
	console.log("Request: " + req.body["date"]);
	var arena = new Arena()
	arena.name = req.body.name
	arena.city = req.body.city
	arena.hometeam = req.body.hometeam
	// team.away_team = req.body.away_team


	arena.save(function(err){
		// if there's an error, send back a response with an error message
		if(err) return res.json({message: "there is an error", error:err})
		
		// if there's not an error, report that an arena has been successfully created
		res.json({message: "new arena created!"})
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
