var express = require('express');
const router = express.Router();




const {
  
  getUserById,
  getUser,
  updateUser,
  getAllusers,
  
} = require('../controlers/user');
const { isAuthenticated, isSignedIn } = require('../controlers/auth');



router.param('emailId', getUserById);
router.get('/alluser', getAllusers);
router.get('/:emailId',isSignedIn, isAuthenticated, getUser);
router.put('/:emailId',isSignedIn, isAuthenticated, updateUser);






module.exports = router;