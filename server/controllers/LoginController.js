const express = require('express');
const loginRouter = express.Router();
const UsuarioRepository = require('./../models/repository/UsuarioRepository.js');
const GruposRepository = require('./../models/repository/GruposRepository.js');

var usuarioRepository = new UsuarioRepository();
var gruposRepository = new GruposRepository();


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
            if(usuario.tipoUsuario.id == 1){
                let grupos = await gruposRepository.getGrupos(usuario.id);
                let gruposDemas = await gruposRepository.getGruposN(usuario.id);
                usuario.grupos = grupos;
                usuario.gruposDemas = gruposDemas;
            }
            req.session.usuario = usuario;
        }
    }
    res.end(JSON.stringify(usuario));
});

module.exports = loginRouter;