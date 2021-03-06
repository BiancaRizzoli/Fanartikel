var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var fileUpload = require('express-fileupload')
var path = require('path')
var fs = require('fs')

var con = mysql.createPool({
  connectionLimit: 1,
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
      res.send('500: Something broke');
    } else {
      var sql = 'SELECT b.Benutzername, s.Status FROM benutzer AS b JOIN status as s ON s.StatusID = b.StatusID'
      con.query(sql, (err, user) => {
        if (err) {
          res.send('500: Something broke');
        } else {
          var sql = 'SELECT Status FROM status'
          con.query(sql, (err, rights) => {
            if (err) {
              res.send('500: Something broke');
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
router.post('/upload',isAuthenticated, (req, res) => {
  var currency = 1
  var color
  if (req.body.color === 'Schwarz') {
    color = 1
  } else if (req.body.color === 'Weiß') {
    color = 2
  } else if (req.body.color === 'Blau') {
    color = 3
  } else if (req.body.color === 'Grün') {
    color = 4
  } else if (req.body.color === 'Braun') {
    color = 5
  } else if (req.body.color === 'Rot') {
    color = 6
  } else if (req.body.color === 'Gelb') {
    color = 7
  } else if (req.body.color === 'Grau') {
    color = 8
  }

  var file1 = req.files.pic1
  var file2 = req.files.pic2
  file1.mv(path.join(__dirname, '../public/images/', req.files.pic1.name), (err) => {
    if (!err) {
      file2.mv(path.join(__dirname, '../public/images/', req.files.pic2.name), (err) => {
        if (!err) {
          var sql = 'INSERT INTO artikel (Bezeichnung, BildShownFirst, BildShownSecond, Preis, WaehrungsID, FarbID) VALUES ?'
          var values = [[req.body.text, req.files.pic1.name, req.files.pic2.name, req.body.price, currency, color]]
          con.query(sql, [values], (err) => {
            if (err) {
              req.flash('danger', 'Error')
              res.redirect('/dashboard')
            } else {
              var sql = 'SELECT ArtID FROM `artikel` WHERE Bezeichnung = ?'
              con.query(sql, [req.body.text], (err, result) => {
                if (err) {
                  req.flash('danger', 'Error')
                  res.redirect('/dashboard')
                } else {
                  var sql = 'INSERT INTO artikelkategorien (KatID, ArtID) VALUES ?'
                  var values = [[req.body.category, result[0].ArtID]]
                  con.query(sql, [values], (err) => {
                    if (err) {
                      req.flash('danger', 'Error')
                      res.redirect('/dashboard')
                    } else {
                      var sql = 'INSERT INTO artikelfandoms (ArtID, FandomID) VALUES ?'
                      var values = [
                        [result[0].ArtID, req.body.fandom]
                      ]
                      con.query(sql, [values], (err) => {
                        if (err) {
                          req.flash('danger', 'Error')
                          res.redirect('/dashboard')
                        } else {
                          req.flash('success', 'Produkt hinzugefügt')
                          res.redirect('/dashboard')
                        }
                      })
                    }
                  })
                }
              })
            }
          })
        } else {
          req.flash('danger', 'Error')
          res.redirect('/dashboard')
        }
      })
    } else {
      req.flash('danger', 'Error')
      res.redirect('/dashboard')
    }
  })
})

router.post('/delete',isAuthenticated, (req, res) => {
  var deletesql = 'DELETE FROM artikel WHERE ArtID IN (?)'
  con.query(deletesql, [req.body], (err) => {
    if (err) {
      req.flash('danger', 'Error')
      res.send('Error')
    } else {
      req.flash('success', 'Produkt(e) gelöscht')
      res.send('ok')
    }
  })
})

router.post('/userchange',isAuthenticated, (req, res) => {
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

router.post('/userremove',isAuthenticated, (req, res) => {
  if (req.user.Benutzername === req.body.userremove) {
    req.flash('warning', 'Du kannst dich nicht selber löschen!')
    res.redirect('/dashboard')
  } else {
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
  }
})



module.exports = router;
