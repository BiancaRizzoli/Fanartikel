var express = require('express');
var router = express.Router();
var mysql = require('mysql')

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "fanartikel"
});

var sql = 'SELECT Bezeichnung, Preis, BildShownFirst, BildShownSecond FROM artikel'

/* GET home page. */
router.get('/', function (req, res, next) {
  con.query(sql, (err, result) => {
    if (err) res.render('error' , { message: 'Oooopsie', error: err })
    res.render('index', { rows: result });
  })
});

module.exports = router;
