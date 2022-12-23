const express = require('express');
const { isAuthenticatedUser } = require('./auth');
const {
  registerUser,
  loginUser,
  userProfile,
  logout,
  getUserData,
} = require('./userController');
const router = express.Router();

router.route('/register').post(registerUser);

router.route('/login').post(loginUser);

router.route('/me/update').patch(isAuthenticatedUser, userProfile);
router.route('/me').get(isAuthenticatedUser, getUserData);
router.route('/logout').get(logout);

module.exports = router;
