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

/* GET home page. */
router.get('/', isAuthenticated, (req, res) => {
  var sql = 'SELECT a.ArtID, a.Bezeichnung, a.Preis, a.BildShownFirst, a.BildShownSecond, a.FarbID, w.Waehrung FROM artikel as a JOIN waehrungen as w ON a.WaehrungsID = w.WaehrungsID'
  con.query(sql, (err, result) => {
    if (err) {
      res.send('500: Something broke');
    } else {
      var sql = 'SELECT s.Status FROM benutzer as b JOIN status AS S ON b.StatusID = s.StatusID WHERE Benutzername = ?'
      con.query(sql, [req.user.Benutzername], (err, user) => {
        if (err) {
          res.send('500: Something broke');
        } else {
          var sql = 'select k.Kategorie, Count(a.ArtID) AS Anzahl FROM kategorien as k JOIN artikelkategorien as a ON k.KatID = a.KatID Group By k.Kategorie'
          con.query(sql, (err, categories) => {
            if (err) {
              res.send('500: Something broke');
            } else {
              var sql = 'select Farbe from farben'
              con.query(sql, (err, color) => {
                if (err) {
                  res.send('500: Something broke');
                } else {
                  res.render('index', { rows: result, user: user, categories: categories, color: color });
                }
              })
            }
          })
        }
      })
    }
  })
});

router.post('/category', (req, res) => {
  var sql = 'SELECT a.ArtID  FROM artikel as a JOIN artikelkategorien as ak ON a.ArtID = ak.ArtID JOIN kategorien as k on ak.KatID = k.KatID WHERE k.KatID = ?'
  con.query(sql, [req.body], (err, filterID) => {
    if (err) {
      res.send('Error')
    } else {
      var sql = 'SELECT ArtID FROM artikel'
      con.query(sql, (err, allID) => {
        if (err) {
          res.send('Error')
        } else {
          var myWillToLive = []
          var myGrades = []
          var daddy = []
          var test = []
          for (var i = 0; i < allID.length; i++) {
            test.push(allID[i].ArtID)
          }
          daddy.push(test)
          for (var i = 0; i < allID.length; i++) {
            myWillToLive.push(allID[i].ArtID)
          }
          for (var i = 0; i < filterID.length; i++) {
            myGrades.push(filterID[i].ArtID)
          }
          for (var i = 0; i < myGrades.length; i++) {
            var index = myWillToLive.indexOf(myGrades[i])
            myWillToLive.splice(index, 1)
          }
          daddy.push(myWillToLive)
          res.send(daddy)
        }
      })
    }
  })
})

router.post('/color', (req, res) => {
  var sql = 'SELECT ArtID FROM artikel WHERE FarbID = ?'
  con.query(sql, [req.body], (err, del) => {
    if (!err) {
      var sql = 'SELECT ArtID FROM artikel'
      con.query(sql, (err, arr)=>{
        if (!err) {
          var daddy = []
          var mommy = []
          for (var i = 0; i < del.length; i++) {
            daddy.push(del[i].ArtID)
          }
          for (var i = 0; i < arr.length; i++) {
            mommy.push(arr[i].ArtID)
          }
          for (var i = 0; i < daddy.length; i++) {
            var index = mommy.indexOf(daddy[i])
            mommy.splice(index, 1)
          }
          console.log(mommy)
          res.send(mommy)
        } else {
          res.send('500: Something broke')
        }
      })
    } else {
      res.send('500: Something broke')
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

// Logout
router.get('/logout', (req, res) => {
  req.flash('success', 'Abgemeldet')
  req.logout();
  res.redirect('/login');
});

module.exports = router;
