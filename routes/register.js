var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bcrypt = require('bcryptjs');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "fanartikel"
});

/* GET register page */
router.get('/', (req, res, next) => {
  res.render('register')
})

/* POST register */
router.post('/', (req, res, next) => {
  var checkusername = 'SELECT Benutzername FROM benutzer WHERE Benutzername = ?'
  con.query(checkusername, [req.body.username], (err, result) => {
    if (err) {
      req.flash('Datenbank offline')
      res.redirect('/register')
    } else {
      if (result[0].Benutzername.length) {
        req.flash('warning', 'Benutzer schon vorhanden')
        res.redirect('/register')
      } else {
        // Encrypt password
        bcrypt.genSalt(10, (err, salt) => {
          if (err) {
            req.flash('danger', 'Das Passwort entspricht nicht den Richtilinien')
            res.redirect('/register')
          } else {
            bcrypt.hash(req.body.password, salt, (err, hash) => {
              if (err) {
                req.flash('danger', 'Das Passwort entspricht nicht den Richtilinien')
                res.redirect('/register')
              } else {
                var sql = 'INSERT INTO benutzer (Vorname, Nachname, Adresse, Postleitzahl, Ort, Benutzername, Passwort, StatusID) VALUES ?'
                var values = [
                  [req.body.firstname, req.body.lastname, req.body.address, req.body.zipcode, req.body.city, req.body.username, hash, 2]
                ]
                con.query(sql, [values], (err) => {
                  if (err) {
                    req.flash('danger', 'Datenbank offline!')
                    res.redirect('/register')
                  } else {
                    req.flash('success', 'Benutzer erstellt!')
                    res.redirect('/login')
                  }
                })
              }
            })
          }
        })
      }
    }
  })
})

module.exports = router;
