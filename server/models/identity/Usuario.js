const TipoUsuario = require('./TipoUsuario.js');

class Usuario {
    constructor(){

    }

    constructor(id, nombre, apellido, direccion, correo, telefono,documento, tipoUsuario){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.correo = correo;
        this.telefono = telefono;
        this.documento = documento;
        this.tipoUsuario = new TipoUsuario(tipoUsuario);
    }

    constructor(usuario){
        this.id = usuario.id;
        this.nombre = usuario.nombre;
        this.apellido = usuario.apellido;
        this.direccion = usuario.direccion;
        this.correo = usuario.correo;
        this.telefono = usuario.telefono;
        this.tipoUsuario = new TipoUsuario(usuario.tipoUsuario);
    }
}

module.exports = Usuario;