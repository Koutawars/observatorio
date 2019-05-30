var express = require('express');
var path = require('path');
var app = express();
var public = '/../public';
var body_parser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');

/* ---------- Controllers ------------ */
var loginController = require('./controllers/LoginController.js');
var usuarioController = require('./controllers/UsuarioController.js');
/* ---------- Controllers ------------ */

app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(cookieParser());
app.set('trust proxy', 1);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, public ,'/views'));

app.use(body_parser.urlencoded({extended:true}));

app.use(session({
  secret : 's3Cur3',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 3600000*24*5 }
  })
);

/*  --------- Middleware (security) ----------- */
const ROUTES = require('./routesPermited.js');

var sessionChecker = (req, res, next) => {
    let search = ROUTES.exec(req.url), index;
    if(search){
        index = search['index'];
    }

    if(index == 0) next();
    else if (req.session.usuario) next();
    else res.redirect('/login');
};

app.use(sessionChecker);
/*  --------- Middleware (security) ----------- */

/*  --------- Routes ----------- */

app.use('/login', loginController);
app.use('/dashboard', usuarioController);

/*  --------- Routes ----------- */

app.use('/css',express.static(path.resolve(__dirname + public + '/views/css'))); // direccion del css
app.use('/js',express.static(path.resolve(__dirname + public + '/views/js'))); // direccion del javascript
app.use('/img',express.static(path.resolve(__dirname + public + '/views/img'))); // direccion de las imagenes


app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

app.get('/', (req, res) => {
    res.redirect("dashboard");
});
  
app.listen(process.env.PORT || 5000, function () {
    console.log('escuchando en '+ (process.env.PORT || 5000));
});