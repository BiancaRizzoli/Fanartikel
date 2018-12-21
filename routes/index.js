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
  var sql = 'SELECT a.ArtID, a.Bezeichnung, a.Preis, a.BildShownFirst, a.BildShownSecond, w.Waehrung FROM artikel as a JOIN waehrungen as w ON a.WaehrungsID = w.WaehrungsID'
  con.query(sql, (err, result) => {
    if (err) {
      res.send('500: Something broke');
    } else {
      var sql = 'SELECT s.Status FROM benutzer as b JOIN status AS S ON b.StatusID = s.StatusID WHERE Benutzername = ?'
      con.query(sql, [req.user.Benutzername], (err, user) => {
        if (err) {
          res.send('500: Something broke');
        } else {
          var sql = 'select k.Kategorie, Count(a.ArtID) AS Anzahl FROM kategorien as k JOIN artikelkategorien as a ON k.KatID = a.KatID Group By k.Kategorie'
          con.query(sql, (err, categories)=> {
            if (err) {
              res.send('500: Something broke');
            } else {
              res.render('index', { rows: result, user: user, categories: categories });
            }
          })
        }
      })
    }
  })
});

router.post('/filter', (req, res) => {
  var sql = 'select k.Kategorie, Count(a.ArtID) AS Anzahl FROM kategorien as k JOIN artikelkategorien as a ON k.KatID = a.KatID Group By k.Kategorie'
  
  res.send('Hello World')
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
