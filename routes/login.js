var express = require('express');
var router = express.Router();
var mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "fanartikel"
  });

router.get('/', (req, res, next) => {
    res.render('login')
})

module.exports = router;
