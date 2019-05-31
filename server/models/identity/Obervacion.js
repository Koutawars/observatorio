
class Observacion {
    constructor(idobservacion, fecha,observacioncol, tipo_observacion_idtipo_observacion, estudiante_idestudiante,reporte_idreporte,vision_idvision  ){
        this.idobservacion = idobservacion;
        this.fecha = fecha;
        this.observacioncol = observacioncol;
        this.tipo_observacion_idtipo_observacion = tipo_observacion_idtipo_observacion;
        this.estudiante_idestudiante = estudiante_idestudiante;
        this.reporte_idreporte = reporte_idreporte;
        this.vision_idvision = vision_idvision;
    }
}

module.exports = Observacion;