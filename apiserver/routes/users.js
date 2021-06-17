const express = require('express');
const router = express.Router();
const User = require("../db/models/user");
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;

// Decalaring Local Strategies***************************
passport.use('register', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
},
  function (req, res, email, password, done) {
    User.findOne({ email: email }, function (err, user) {
      if (err) { return done(err); }
      if (user) {
        return done(null, false, { message: 'Email is already taken...' });
      } else {
        var newUser = new User();
        newUser.email = email;
        newUser.password = newUser.generateHash(password);
        newUser.save(function (err) {
          if (err) throw err;
          return done(null, newUser);
        });
      }
    });
  }));

passport.use('login', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
},
  function (req, email, password, done) {
    User.findOne({ email: email }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Unknown user' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password !' });
      }
      return done(null, user);
    });
  }
));


router.post("/register", passport.authenticate('register', { failureRedirect: '/register' }), (req, res, next) => {
  res.send(true)
});

router.post("/login", passport.authenticate('login', { failureRedirect: '/login' }), (req, res, next) => {
  res.send(true)
});


module.exports = router;
