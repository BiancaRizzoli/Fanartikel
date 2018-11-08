var express = require('express');
var router = express.Router();
var mysql = require('mysql')

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "fanartikel"
});

/* GET home page. */
router.get('/', isAuthenticated, (req, res, next) => {
  var sql = 'SELECT Bezeichnung, Preis, BildShownFirst, BildShownSecond FROM artikel'
  con.query(sql, (err, result) => {
    if (err) throw err.message;
    res.render('index', { rows: result });
  })
});

// Authentication 
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
      return next();
  }
  res.redirect('/login')
}

module.exports = router;
