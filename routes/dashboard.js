var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var fileUpload = require('express-fileupload')

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "fanartikel"
});

/* GET dashboard page */
router.get('/', isAuthenticated, (req, res, next) => {
  var sql = 'SELECT a.ArtID, a.Bezeichnung, a.Preis, w.Waehrung FROM artikel as a JOIN waehrungen as w ON a.WaehrungsID = w.WaehrungsID'
  con.query(sql, (err, result) => {
    if (err) {
      res.redirect('/')
    } else {
      var sql = 'SELECT Benutzername FROM benutzer'
      con.query(sql, (err, user) => {
        if (err) {
          res.redirect('/')
        } else {
          var sql = 'SELECT Status FROM status'
          con.query(sql, (err, rights) => {
            if (err) {
              res.redirect('/')
            } else {
              res.render('dashboard', { rows: result, user: user, rights: rights })
            }
          })
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

router.use(fileUpload());
router.post('/upload', (req, res) => {
  console.log('Produkt hinzufügen:', req.files.pic1.name, req.files.pic2.name, req.body.price, req.body.text, req.body.currency)
  req.flash('sucess', 'Produkt hinzugefügt')
  res.redirect('/dashboard')
})

router.post('/delete', (req, res) => {
  console.log('Produkt löschen:', req.body.checkbox, req.body.name)
  req.flash('success', 'Eintrag gelöscht')
  res.redirect('/dashboard')
})

router.post('/userchange', (req, res) => {
  if (req.body.right == 'Admin') {
    var sql = 'UPDATE benutzer SET StatusID = 1 WHERE Benutzername = ?'
  } else if (req.body.right == 'Kunde') {
    var sql = 'UPDATE benutzer SET StatusID = 2 WHERE Benutzername = ?'
  }
  con.query(sql, [req.body.userchange], (err) => {
    if (err) {
      req.flash('warning', 'Error')
      res.redirect('/dashboard')
    } else {
      req.flash('success', 'Rechte geändert')
      res.redirect('/dashboard')
    }
  })
})

router.post('/userremove', (req, res) => {
  var sql = 'DELETE FROM benutzer WHERE Benutzername = ?'
  con.query(sql, [req.body.userremove], (err) => {
    if (err) {
      req.flash('warning', 'Error')
      res.redirect('/dashboard')
    } else {
      req.flash('success', 'Benutzer gelöscht')
      res.redirect('/dashboard')
    }
  })
})

module.exports = router;
