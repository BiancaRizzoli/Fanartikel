var express = require('express');
var router = express.Router();
var mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "fanartikel"
  });

  /* GET dashboard page */
router.get('/', isAuthenticated, (req, res, next) => {
    res.render('dashboard')
})

// Authentication 
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
      return next();
  }
  res.redirect('/login')
}

module.exports = router;
