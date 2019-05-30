const TipoUsuario = require('./TipoUsuario.js');

class Usuario {
    constructor(id = null, nombre = null, apellido = null, direccion = null, correo = null, telefono = null, documento = null, password = null, tipoUsuario = null){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.correo = correo;
        this.telefono = telefono;
        this.documento = documento;
        this.password = password;
        this.tipoUsuario = new TipoUsuario(tipoUsuario);
    }
}

module.exports = Usuario;