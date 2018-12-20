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

/* GET home page. */
router.get('/', isAuthenticated, (req, res) => {
  var sql = 'SELECT Bezeichnung, Preis, BildShownFirst, BildShownSecond FROM artikel'
  con.query(sql, (err, result) => {
    if (err) {
      res.send('500: Something broke');
    } else {
      var sql = 'SELECT s.Status FROM benutzer as b JOIN status AS S ON b.StatusID = s.StatusID WHERE Benutzername = ?'
      con.query(sql, [req.user.Benutzername], (err, user) => {
        if (err) {
          res.send('500: Something broke');
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

// Logout
router.get('/logout', (req, res) => {
  req.flash('success', 'Abgemeldet')
  req.logout();
  res.redirect('/login');
});

// Add to wishlist
router.post('/addtowishlist', (req, res) => {
  var selectsql = 'SELECT BenID FROM benutzer WHERE Benutzername = ?'
  con.query(selectsql, [req.user.Benutzername], (err, result) => {
    if (err) {
      req.flash('danger', 'Error')
      res.redirect('/')
    } else {
      var insertsql = 'INSERT INTO benutzerwunschliste (ArtID, BenID) VALUES ?'
      var values = [[req.body, result[0].BenID]]
      con.query(insertsql, [values], (err) => {
        if (err) {
          req.flash('danger', 'Error')
          res.send('Error')
        } else {
          req.flash('success', 'Wunschliste gespeichert')
          res.send('OK')
        }
      })
    }
  })
})

// Remove from wishlist
router.post('/removefromwishlist', (req, res) => {

})

module.exports = router;
