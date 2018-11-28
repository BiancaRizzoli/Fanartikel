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
      var sql ='SELECT Benutzername FROM benutzer'
      con.query(sql, (err, user)=>{
        if (err) {
          res.redirect('/')
        } else {
          res.render('dashboard', { rows: result, user: user })
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
router.post('/upload', (req, res, next) => {
  console.log('Produkt hinzufügen:', req.files.pic1.name, req.files.pic2.name, req.body.price, req.body.text, req.body.currency)
  next()
})

router.post('/delete', (req, res, next) => {
  console.log('Produkt löschen:', req.body.checkbox, req.body.name)
  next()
})

router.post('/userchange', (req, res, next) => {
  console.log('Rechte updaten:', req.body.userchange, req.body.right)
  next()
})

router.post('/userremove', (req, res, next) => {
  console.log('Benutzer löschen:', req.body.userremove)
  next()
})



module.exports = router;
