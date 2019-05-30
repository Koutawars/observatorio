

class Grupo {
    constructor(){

    }

    constructor(idgrupo,salon){
        this.idgrupo = idgrupo;
        this.salon = salon;
    }

    constructor(grupo){
        this.idgrupo = grupo.idgrupo;
        this.salon = grupo.salon;
    }
}

module.exports = Grupo;