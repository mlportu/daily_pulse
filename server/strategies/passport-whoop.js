// strategies/passport-whoop.js
const { Strategy: OAuth2Strategy } = require('passport-oauth2');
const User = require('../models/User');

class WhoopStrategy extends OAuth2Strategy {
  constructor(options, verify) {
    super({
      authorizationURL: 'https://api.prod.whoop.com/oauth/oauth2/auth',
      tokenURL: 'https://api.prod.whoop.com/oauth/oauth2/token',
      clientID: options.clientID,
      clientSecret: options.clientSecret,
      callbackURL: options.callbackURL,
      scope: 'read:profile',
    }, verify);

    this.name = 'whoop';
  }

  userProfile(accessToken, done) {
    this._oauth2.get('https://api.prod.whoop.com/developer/v1/user/profile', accessToken, (err, body, res) => {
      if (err) {
        return done(err);
      }
      try {
        const profile = JSON.parse(body);
        profile.provider = 'whoop';
        done(null, profile);
      } catch (e) {
        done(e);
      }
    });
  }
}

module.exports = WhoopStrategy;
