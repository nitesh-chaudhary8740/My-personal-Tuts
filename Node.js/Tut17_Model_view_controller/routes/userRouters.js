const express = require("express");
// const router = express();
const router = express.Router();
const {getAllUsersHandler,updateUser,addUser,getAllUserHtml,deleteUser} = require('../controllers/user_routes_controller');

// routes
router.get('/all/api',getAllUsersHandler);
router.get('/',getAllUserHtml);
//post request to create new user
router.post("/add",addUser);
router.route("/update/:email").patch(updateUser);
router.route("/delete/:email").delete(deleteUser);


  module.exports = router;