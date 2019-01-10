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
  var sql = 'SELECT a.ArtID, a.Bezeichnung, a.Preis, a.BildShownFirst, a.BildShownSecond, a.FarbID, w.Waehrung FROM artikel as a JOIN waehrungen as w ON a.WaehrungsID = w.WaehrungsID'
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
          con.query(sql, (err, categories) => {
            if (err) {
              res.send('500: Something broke');
            } else {
              var sql = 'select Farbe from farben'
              con.query(sql, (err, color) => {
                if (err) {
                  res.send('500: Something broke');
                } else {
                  res.render('wishlist', { rows: result, user: user, categories: categories, color: color });
                }
              })
            }
          })
        }
      })
    }
  })
});

router.post('/', (req, res) => {
  var sql = 'SELECT BenID FROM benutzer WHERE Benutzername = ?'
  console.log(req.user.Benutzername)
  con.query(sql, [req.user.Benutzername], (err, result) =>{
    if (err) {
      res.send({message: 'SELECT Error'})
    } else {
      var sql = 'INSERT INTO benutzerwunschliste(BenID, ArtID) VALUES ?'
      var values = [[result[0].BenID, req.body.ArtikelID]]
      con.query(sql, [values], (err) => {
        if (err) {
          res.send({message: 'INSERT Error'})
        } else {
          res.send({message: 'Artikel hinzugefügt'})
        }
      })    
    }
  })
})


// Authentication 
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login')
}

module.exports = router;
