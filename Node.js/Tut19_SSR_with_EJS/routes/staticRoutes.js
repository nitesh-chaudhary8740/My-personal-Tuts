const express = require("express");
const staticRouter = express.Router();
const {addUser,showUsersData,addUsersData} = require('../controllers/static_routes_controllers')
staticRouter.post('/addUser',addUser)
staticRouter.get('/addUser',addUsersData)
staticRouter.get('/showUsers',showUsersData)
module.exports = staticRouter;