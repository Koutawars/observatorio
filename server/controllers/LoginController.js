var express = require('express');
var loginRouter = express.Router();
const UsuarioRepository = require('./../models/repository/UsuarioRepository.js');

var usuarioRepository = new UsuarioRepository();

loginRouter.get('/', function (req, res) {
    if(req.session.usuario) res.redirect('/dashboard');
    else res.render('login');
});

loginRouter.post('/', async function (req, res) {
    let correo = req.body.correo;
    let password = req.body.password;
    let usuario = await usuarioRepository.getOneCorreo(correo);
    if(usuario){
        if(usuario.password == password){
            req.session.usuario = usuario;
        }
    }
    res.end(JSON.stringify(usuario));
});

module.exports = loginRouter;