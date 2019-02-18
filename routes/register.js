var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bcrypt = require('bcryptjs');


var con = mysql.createPool({
  connectionLimit: 1,
  host: "localhost",
  user: "root",
  password: "",
  database: "fanartikel"
});

/* GET register page */
router.get('/', (req, res) => {
  res.render('register')
})

/* POST register */
router.post('/', (req, res) => {
  // Validation
  if (!validateFirstName(req.body.firstname)) {
    req.flash('warning', 'Der Vorname darf keine Zahlen, Leerzeichen und Sonderzeichen enthalten');
    return res.redirect('/register');
  }
  if (!validateLastName(req.body.lastname)) {
    req.flash('warning', 'Der Nachname darf keine Zahlen, Leerzeichen und Sonderzeichen enthalten');
    return res.redirect('/register');
  }
  if (!validateZipcode(req.body.zipcode)) {
    req.flash('warning', 'Die Postleitzahl darf nur Zahlen enthalten');
    return res.redirect('/register');
  }

  if (!validateUsername(req.body.username)) {
    req.flash('warning', 'Der Benutzername darf keine Sonderzeichen, keine Leerzeichen und nur maximal 50 Zeichen enthalten');
    return res.redirect('/register');
  }

  if (!validatePwd(req.body.password)) {
    req.flash('warning', 'Das Passwort muss mindestens ein Großbuchstabe, eine Zahl, mindestens 8 Zeichen und ein Sonderzeichen enthalten');
    return res.redirect('/register');
  }


  // Encrypt password
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      req.flash('danger', 'Error')
      res.redirect('/register')
    } else {
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err) {
          req.flash('danger', 'Error')
          res.redirect('/register')
        } else {
          var sql = 'INSERT INTO benutzer (Vorname, Nachname, Adresse, Postleitzahl, Ort, Benutzername, Passwort, StatusID) VALUES ?'
          var values = [
            [req.body.firstname, req.body.lastname, req.body.address, req.body.zipcode, req.body.city, req.body.username, hash, 2]
          ]
          con.query(sql, [values], (err) => {
            if (err) {
              req.flash('danger', 'Datenbank offline!')
              res.redirect('/register')
            } else {
              req.flash('success', 'Benutzer erstellt!')
              res.redirect('/login')
            }
          })
        }
      })
    }
  })
})


var validateFirstName = (str) => {
  console.log(str)
  if (str !== undefined || str === '') {
    var re = /^[a-zA-Z]*$/;
    return re.test(String(str));  
  } else {
    return false;
  }
}

var validateLastName = (str) => {
  if (str !== undefined || str === '' ) {
    var re = /^[a-zA-Z]*$/;
    return re.test(String(str));  
  } else {
    return false;
  }
}

var validateZipcode = (str) => {
  if (str !== undefined || str === '') {
    var re = /^[0-9]{1,11}$/;
    return re.test(String(str));  
  } else {
    return false;
  }
}

var validateUsername = (str) => {
  if (str !== undefined || str === '') {
    var re = /^[a-zA-Z0-9_-]{1,50}$/;
    return re.test(String(str));  
  } else {
    return false;
  }
}

var validatePwd = (str) => {
  if (str !== undefined || str === '') {
    var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!_\-*()@%&]).{8,50}$/;
    return re.test(String(str));
  } else {
    return false;
  }
}

module.exports = router;
