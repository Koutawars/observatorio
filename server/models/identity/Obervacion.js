
class Observacion {
    constructor(idobservacion, fecha,descripcion, tipo_observacion_idtipo_observacion, estudiante_idestudiante,reporte_idreporte,vision_idvision, usuario_id, nombreObs=null ){
        this.idobservacion = idobservacion;
        this.fecha = fecha;
        this.descripcion = descripcion;
        this.tipo_observacion_id = tipo_observacion_idtipo_observacion;
        this.estudiante_idestudiante = estudiante_idestudiante;
        this.reporte_idreporte = reporte_idreporte;
        this.vision_idvision = vision_idvision;
        this.usuario_id= usuario_id;
        this.nombreObs = nombreObs; 
    }
}

module.exports = Observacion;