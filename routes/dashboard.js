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
      var sql = 'SELECT b.Benutzername, s.Status FROM benutzer AS b JOIN status as s ON s.StatusID = b.StatusID'
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
    var sql = 'SELECT s.Status FROM benutzer as b JOIN status AS S ON b.StatusID = s.StatusID WHERE Benutzername = ?'
    con.query(sql, [req.user.Benutzername], (err, result) => {
      if (err) {
        req.flash('danger', 'Datenbank offline')
        res.redirect('/login')
      } else {
        if (result[0].Status == 'Admin') {
          return next();
        } else {
          res.redirect('/')
        }
      }
    })
  } else {
    res.redirect('/login')
  }
}

router.use(fileUpload());
router.post('/upload', (req, res) => {
  var currency
  if (req.body.currency == 'EURO') {
    currency = 1
  } else if (req.body.currency == 'DOLLAR') {
    currency = 2
  } else if (req.body.currency == 'PFUND') {
    currency = 3
  } else {
    currency = 1
  }
  var sql = 'INSERT INTO artikel (Bezeichnung, BildShownFirst, BildShownSecond, Preis, WaehrungsID) VALUES ?'
  var values = [[req.body.text, req.files.pic1.name, req.files.pic2.name, req.body.price, currency]]
  con.query(sql, [values], (err) => {
    if (err) {
      req.flash('danger', 'Error')
      res.redirect('/dashboard')
    } else {
      req.flash('sucess', 'Produkt hinzugefügt')
      res.redirect('/dashboard')
    }
  })
})

router.post('/delete', (req, res) => {
  var sql = 'DELETE FROM artikel WHERE ArtID IN (?)'
  con.query(sql, [req.body], (err) => {
    if (err) {
      req.flash('danger', 'Error')
      res.redirect('/dashboard')
    } else {
      req.flash('success', 'Produkt gelöscht')
      res.redirect('/dashboard')
    }
  })
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
