
class Cita {
    constructor(idcita, fecha,lugar, usuario_id, acudiente_id_acudiente, acuerdo_idacuerdo, reporte_idreporte){
        this.idcita = idcita;
        this.lugar = lugar;
        this.idUsuario = usuario_id;
        this.idAcudiente = acudiente_id_acudiente;
        this.idAcuerdo = acuerdo_idacuerdo;
        this.idReporte = reporte_idreporte;
    }
}

module.exports = Cita;