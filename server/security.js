var security = {};
const constantes = require('./constantes.js');

security.profesor = (req, res, next) => {
    if(req.session.usuario.tipoUsuario.nombre.toLowerCase() == constantes.PROFESOR){
        next();
    }else{
        res.redirect('/dashboard');
    }
};

/*
security.familiar = (req, res, next) => {
    if(req.session.usuario.tipoUsuario.id == 1){
        next();
    }else{
        res.redirect('/dashboard');
    }
};
*/

module.exports = security;