var express = require('express');
var path = require('path');
var app = express();
var public = '/../public';
var body_parser = require('body-parser');
var session = require('express-session');

/* ---------- Controllers ------------ */

var loginController = require('./controllers/LoginController.js');


/* ---------- Controllers ------------ */
  
app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.set('trust proxy', 1);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, public ,'/views'));

app.use(body_parser.urlencoded({extended:true}));

app.use(session({
  secret : 's3Cur3',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: true }
  })
);

/*  --------- Routes ----------- */

app.use('/', loginController);

/*  --------- Routes ----------- */

var sessionChecker = (req, res, next) => {
    if (req.session.user) {
        res.redirect('/dashboard');
    } else {
        next();
    } 
};

var sessionChecker2 = (req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/login');
    }
};

app.use('/css',express.static(path.resolve(__dirname + public + '/views/css'))); // direccion del css
app.use('/js',express.static(path.resolve(__dirname + public + '/views/js'))); // direccion del javascript
app.use('/img',express.static(path.resolve(__dirname + public + '/views/img'))); // direccion de las imagenes



/*
app.get('/logout', sessionChecker2, (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

*/

app.get('/', (req, res) => {
    res.render("index");
});
  
app.listen(process.env.PORT || 5000, function () {
    console.log('escuchando en '+ (process.env.PORT || 5000));
});