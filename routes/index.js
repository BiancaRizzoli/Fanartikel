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
    if (err) {
      res.render('error', {error: err, message: 'Datenbank offline'});
    } else {
      var sql = 'SELECT s.Status FROM benutzer as b JOIN status AS S ON b.StatusID = s.StatusID WHERE Benutzername = ?'
      con.query(sql, [req.user.Benutzername], (err, user)=>{
        if (err) {
          res.render('error', {error: err, message: 'Datenbank offline'});
        } else {
          res.render('index', { rows: result, user: user });
        }
      })
    }
  })
});

// Authentication 
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
      return next();
  }
  res.redirect('/login')
}

router.get('/logout', (req, res) => {
  req.flash('success', 'Abgemeldet')
  req.logout();
  res.redirect('/login');
});

module.exports = router;
