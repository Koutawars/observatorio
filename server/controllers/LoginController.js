var express = require('express');
var loginRouter = express.Router();
const UsuarioRepository = require('./../models/repository/UsuarioRepository.js');

var usuarioRepository = new UsuarioRepository();

loginRouter.get('/', function (req, res) {
    res.render('login');
});

loginRouter.post('/', function (req, res) {
    let correo = req.body.correo;
    let password = req.body.password;
    let usuario = usuarioRepository.getOneCorreo(correo);
    if(usuario){
        if(usuario.password == password){
            /* ----- Se crea la cookie ------ */
            req.session.usuario = usuario;
        }
    }
    res.end(JSON.stringify(usuario));
});

module.exports = loginRouter;