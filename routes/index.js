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
          var sql = 'select k.Kategorie, k.KatID, Count(a.ArtID) AS Anzahl FROM kategorien as k JOIN artikelkategorien as a ON k.KatID = a.KatID Group By k.Kategorie'
          con.query(sql, (err, categories) => {
            if (err) {
              res.send('500: Something broke');
            } else {
              var sql = 'SELECT Farbe FROM farben'
              con.query(sql, (err, color) => {
                if (err) {
                  res.send('500: Something broke');
                } else {
                  var sql = 'SELECT FandomID, Bild FROM fandoms'
                  con.query(sql, (err, fan) => {
                    if (err) {
                      res.send('500: Something broke');
                    } else {
                      var sql = 'SELECT benutzerwunschliste.ArtID FROM benutzer JOIN benutzerwunschliste ON benutzerwunschliste.BenID = benutzer.BenID WHERE benutzer.Benutzername = ?'
                      con.query(sql, [req.user.Benutzername], (err, ben) => {
                        if (err) {
                          res.send('500: Something broke');
                        } else {
                          var wish = []
                          for (i in ben) {
                            wish.push(ben[i].ArtID)
                          }
                          var sess
                          if (req.session.price) {
                            sess = req.session.price
                            sess.toFixed(2)
                          } else {
                            sess = 0
                            sess.toFixed(2)
                          }
                          sess = sess+' €'
                          res.render('index', { rows: result, user: user, categories: categories, color: color, fandom: fan, ben: wish, session: sess });
                        }
                      })
                    }
                  })
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
          //var test = []
          /*for (var i = 0; i < allID.length; i++) {
            test.push(allID[i].ArtID)
          }
          daddy.push(test)*/
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
          console.log(myWillToLive)
          res.send(myWillToLive)
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
      con.query(sql, (err, arr) => {
        if (!err) {
          var daddy = []
          var mommy = []
          var son = []
          var sister = []
          /*for (var i = 0; i < arr.length; i++) {
            sister.push(arr[i].ArtID)
          }
          son.push(sister)*/
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
          //son.push(mommy)
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

router.post('/fandom', (req, res) => {
  var sql = 'SELECT ArtID FROM artikel'
  con.query(sql, (err, result) => {
    if (err) {
      res.send({ error: err })
    } else {
      var sql = 'SELECT artikel.Bezeichnung, artikel.ArtID FROM artikel JOIN artikelfandoms ON artikel.ArtID = artikelfandoms.ArtID JOIN fandoms ON artikelfandoms.FandomID = fandoms.FandomID WHERE fandoms.FandomID =  ?'
      con.query(sql, [req.body], (err, fandom) => {
        if (err) {
          res.send({ error: err })
        } else {
          var daddy = []
          var mommy = []
          var son = []
          var sister = []
          for (var i = 0; i < result.length; i++) {
            sister.push(result[i].ArtID)
          }
          son.push(sister)
          for (var i = 0; i < fandom.length; i++) {
            daddy.push(fandom[i].ArtID)
          }
          for (var i = 0; i < result.length; i++) {
            mommy.push(result[i].ArtID)
          }
          for (var i = 0; i < daddy.length; i++) {
            var index = mommy.indexOf(daddy[i])
            mommy.splice(index, 1)
          }
          son.push(mommy)
          res.send(son)
        }
      })
    }
  })
})

router.post('/reset', (req, res) => {
  var sql = 'SELECT ArtID FROM artikel'
  con.query(sql, (err, result) => {
    if (err) {
      res.send('Error')
    } else {
      var reset = []
      for (var i = 0; i < result.length; i++) {
        reset.push(result[i].ArtID)
      }
      res.send(reset)
    }
  })
})

router.post('/checkout', (req, res) => {
  if (req.body.ArtID) {
    var sql = 'SELECT artikel.Preis FROM artikel WHERE artikel.ArtID = ?'
    con.query(sql, [req.body.ArtID], (err, price)=>{
      if (err) {
        res.send({message: 'SELECT Error'})
      } else {
        if (!req.session.price) {
          req.session.price = price[0].Preis
        } else {
          req.session.price += price[0].Preis
        }
        res.send({price: req.session.price.toFixed(2)})
      }
    })  
  } else {
    req.session.price = 0
    res.send({price: 0})
  }
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
