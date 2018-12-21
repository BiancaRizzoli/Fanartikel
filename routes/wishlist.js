var express = require('express');
var router = express.Router();
var mysql = require('mysql')

var con = mysql.createPool({
  connectionLimit: 1,
  host: "localhost",
  user: "root",
  password: "",
  database: "fanartikel"
});

router.get('/', isAuthenticated, (req, res) => {
    res.render('wishlist')
})

// Authentication 
function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/login')
  }

// Logout
router.get('/logout', (req, res) => {
    req.flash('success', 'Abgemeldet')
    req.logout();
    res.redirect('/login');
  });

module.exports = router;
