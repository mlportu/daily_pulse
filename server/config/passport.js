// config/passport.js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const WhoopStrategy = require('../strategies/passport-whoop');
const User = require('../models/User');

// Google Strategy
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback',
}, async (accessToken, refreshToken, profile, done) => {
  const newUser = {
    googleId: profile.id,
    displayName: profile.displayName,
    firstName: profile.name.givenName,
    lastName: profile.name.familyName,
    image: profile.photos[0].value,
  };

  try {
    let user = await User.findOne({ googleId: profile.id });

    if (user) {
      done(null, user);
    } else {
      user = await User.create(newUser);
      done(null, user);
    }
  } catch (err) {
    console.error(err);
  }
}));

// Whoop Strategy
passport.use(new WhoopStrategy({
  clientID: process.env.WHOOP_CLIENT_ID,
  clientSecret: process.env.WHOOP_CLIENT_SECRET,
  callbackURL: process.env.WHOOP_CALLBACK_URL,
}, async (accessToken, refreshToken, profile, done) => {
  const newUser = {
    whoopId: profile.id,
    displayName: profile.username,
    firstName: profile.first_name,
    lastName: profile.last_name,
    image: profile.image,
  };

  try {
    let user = await User.findOne({ whoopId: profile.id });

    if (user) {
      done(null, user);
    } else {
      user = await User.create(newUser);
      done(null, user);
    }
  } catch (err) {
    console.error(err);
    done(err, null);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});