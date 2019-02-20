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
  var sql = 'SELECT a.ArtID, a.Bezeichnung, a.Preis, a.BildShownFirst, a.BildShownSecond, a.FarbID, w.Waehrung FROM artikel as a JOIN waehrungen as w ON a.WaehrungsID = w.WaehrungsID JOIN benutzerwunschliste as b ON b.ArtID = a.ArtID WHERE b.BenID = (SELECT BenID FROM benutzer WHERE Benutzername = ?)'
  con.query(sql, [req.user.Benutzername], (err, result) => {
    if (err) {
      res.send('500: Something broke');
    } else {
      var sql = 'SELECT s.Status FROM benutzer as b JOIN status AS S ON b.StatusID = s.StatusID WHERE Benutzername = ?'
      con.query(sql, [req.user.Benutzername], (err, user) => {
        if (err) {
          res.send('500: Something broke');
        } else {
          var sql = 'SELECT FandomID, Bild FROM fandoms'
          con.query(sql, (err, fan) => {
            if (err) {
              res.send('500: Something broke');
            } else {
              var sess
              if (req.session.price) {
                sess = req.session.price
              } else {
                sess = 0
              }
              sess = sess.toFixed(2) + ' €'
              res.render('wishlist', { rows: result, user: user, fandom: fan, session: sess });
            }
          })
        }
      })
    }
  })
});

// Add things to wishlist
router.post('/', (req, res) => {
  var sql = 'SELECT BenID FROM benutzer WHERE Benutzername = ?'
  con.query(sql, [req.user.Benutzername], (err, result) => {
    if (err) {
      res.send({ message: 'SELECT Error' })
    } else {
      var sql = 'SELECT BenID, ArtID FROM benutzerwunschliste WHERE BenID = ? AND ArtID = ?'
      con.query(sql, [result[0].BenID, req.body.ArtikelID], (err, exist) => {
        if (err) {
          res.send({ message: 'EXIST Error' })
        } else {
          if (exist.length > 0) {
            var sql = 'DELETE FROM benutzerwunschliste WHERE BenID = ? AND ArtID = ?'
            con.query(sql, [result[0].BenID, req.body.ArtikelID], (err) => {
              if (err) {
                res.send({ message: 'DELETE Error', type: 'danger' })
              } else {
                res.send({ message: 'Artikel gelöscht', type: 'danger', sherlock: true })
              }
            })
          } else {
            var sql = 'INSERT INTO benutzerwunschliste(BenID, ArtID) VALUES ?'
            var values = [[result[0].BenID, req.body.ArtikelID]]
            con.query(sql, [values], (err) => {
              if (err) {
                res.send({ message: 'INSERT Error', type: 'danger' })
              } else {
                res.send({ message: 'Artikel hinzugefügt', type: 'success', sherlock: false })
              }
            })
          }
        }
      })
    }
  })
})

router.post('/remove', (req, res) => {
  var sql = 'DELETE FROM benutzerwunschliste WHERE ArtID = ? AND BenID = (SELECT BenID FROM benutzer WHERE Benutzername = ?)'
  con.query(sql, [req.body.ArtikelID, req.user.Benutzername], (err) => {
    if (err) {
      res.send({ message: 'DELETE Error', type: 'danger' })
    } else {
      res.send({ message: 'Artikel gelöscht', type: 'danger' })
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
