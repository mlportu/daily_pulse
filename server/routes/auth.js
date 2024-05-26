// routes/auth.js
const express = require('express');
const passport = require('passport');
const router = express.Router();

// @desc Auth with Google
// @route GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

// @desc Google auth callback
// @route GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/dashboard');
  }
);

// @desc Auth with Whoop
// @route GET /auth/whoop
router.get('/whoop', passport.authenticate('whoop'));

// @desc Whoop auth callback
// @route GET /auth/whoop/callback
router.get('/whoop/callback', passport.authenticate('whoop', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/dashboard');
  }
);

// @desc Logout user
// @route /auth/logout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
