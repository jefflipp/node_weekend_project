
var express = require('express')
var teamRouter = express.Router()
var teamsController = require('../controllers/teamsController')
var Team = require('../models/Team')

teamRouter.use(function(req,res,next){
	// DO AUTHENTICATION HERE!
	console.log('someone is checking teams out')
	// if not logged in res.json({message: "please log in"})
	// else, next ()
	next()
})
// set up index/get for arena router
teamRouter.route('/')
	.get(teamsController.index)
	// for creating a new arena
	.post(teamsController.create)


// arenaRouter.route('/arena/:arena_id')
// 	// this is the show action 
// 	.get(arenasController.show)

// 	// this is the update action
// 	.put(arenasController.update)

// 	// this is the destroy function
// 	.delete(arenasController.destroy)

module.exports = teamRouter
