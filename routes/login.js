var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcryptjs');

var con = mysql.createPool({
  connectionLimit: 1,
  host: "localhost",
  user: "root",
  password: "",
  database: "fanartikel"
});

/* GET login page */
router.get('/', (req, res) => {
  res.render('login')
})

/* POST login */
router.post('/',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  })
);

// Login verification
passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((user, done) => {
  done(null, user)
})

passport.use('local', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
},
  (req, username, password, done) => {
    var sql = 'SELECT Benutzername, Passwort FROM benutzer WHERE Benutzername = ?'
    con.query(sql, [username], (err, rows) => {
      if (err) {
        return done(null, false, req.flash('danger', 'Password oder Benutzername falsch'));
      } else if (!rows.length) {
        return done(null, false, req.flash('danger', 'Password oder Benutzername falsch'));
      } else {
        bcrypt.compare(password, rows[0].Passwort, (err, res) => {
          if (!err) {
            if (res) {
              return done(null, rows[0])
            } else {
              return done(null, false, req.flash('danger', 'Password oder Benutzername falsch!'));
            }
          } else {
            return done(null, false, req.flash('danger', 'Password oder Benutzername falsch!'));
          }
        })
      }
    })
  }
))

module.exports = router;
