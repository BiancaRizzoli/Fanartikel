var express = require('express');
var router = express.Router();
var mysql = require('mysql')

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "fanartikel"
});

/* GET login page */
router.get('/', (req, res, next) => {
  res.render('login')
})

/* POST login */
router.post('/', (req, res, next) => {
  req.flash('danger', 'Try again!')
  res.redirect('/login')
})


module.exports = router;
