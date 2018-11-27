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
    res.render('dashboard')
})

// Authentication 
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
      return next();
  }
  res.redirect('/login')
}

router.use(fileUpload());
router.post('/upload', (req, res, next)=>{
  console.log('Produkt hinzufügen:', req.files.pic1.name, req.files.pic2.name, req.body.price, req.body.text, req.body.currency)
  next()
})

router.post('/delete', (req, res, next)=>{
  console.log('Produkt löschen:', req.body.checkbox, req.body.name)
  next()
})

router.post('/user', (req, res, next)=>{
  console.log('Rechte updaten:', req.body.user, req.body.right)
  next()
})


module.exports = router;
