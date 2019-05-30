var express = require('express');
var loginRouter = express.Router();
const UsuarioRepository = require('./../models/repository/UsuarioRepository.js');

loginRouter.get('/', function (req, res) {
    res.render('login');
});

loginRouter.post('/', function (req, res) {
    let correo = req.body.correo;
    let password = req.body.password;
    UsuarioRepository.get

});

module.exports = loginRouter;