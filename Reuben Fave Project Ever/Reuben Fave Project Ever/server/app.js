var express = require('express');
var passport = require('passport');
var bodyParser = require('body-parser');
var mongoUtils = require('./mongoUtils');
//var session = require('session');
var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

passport.authenticate('facebook');
app.get('/auth/facebook',
    passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home. 
        res.redirect('/');
    });

/*get
app.get('/', function(req, res)){
  res.send()
}*/

//http://localhost:3000/

//initMongoDB(callback) = initMongoDB(function()    {})
mongoUtils.initMongoDB(function (err) {
    if (err) throw err;
    console.log('Connected to MongoDB!');
    app.use('/', require('./routes'));
    app.listen(8080, function () {
        console.log('Waiting on port 3000');
    })
})



 /* app.use(session({
    secret: '5a3db6b29f5e7bb989957efc03b82253',
    resave: true,
    saveUninitialized: true
  }));
  app.use(passport.initialize());
  app.use(passport.session());*/