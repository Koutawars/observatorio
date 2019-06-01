

class Reporte {
    constructor(idreporte, fecha,idtipo_repote, nombreTipo=null){
        this.idreporte = idreporte;
        this.fecha = fecha;
        this.idtipo_repote=idtipo_repote;
        this.nombreTipo= nombreTipo;
    }
}

module.exports = Reporte;