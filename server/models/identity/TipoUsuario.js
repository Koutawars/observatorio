
class TipoUsuario {
    constructor(){
        
    }

    constructor(id, nombre){
        this.id = id;
        this.nombre = nombre;
    }

    constructor(tipoUsuario){
        this.id = tipoUsuario.id;
        this.nombre = tipoUsuario.nombre;
    }
}

module.exports = TipoUsuario;