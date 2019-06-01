const con = require('../../connection.js');
const Obervacion = require('../identity/Obervacion.js');


class ObservacionesRepository {

    async getObservaciones(id){
        return await con.query(`
            SELECT * FROM observacion
            INNER JOIN estudiante ON estudiante.idestudiante = observacion.estudiante_idestudiante
            INNER JOIN tipo_observacion ON tipo_observacion.idtipo_observacion = observacion.tipo_observacion_idtipo_observacion
            where estudiante.idestudiante = ${id} ;
        `).then(function(result){

            var observaciones = [];
            var temp;
            
            result.forEach(element => {
                temp = new Obervacion(element.idobservacion, element.fecha, element.descripcion, element.tipo_observacion_idtipo_observacion, element.estudiante_idestudiante, element.reporte_idreporte, element.vision_idvision, element.usuario_id, element.nombreObs);
                observaciones.push(temp);
            });
             return observaciones;
        });
    }



}
module.exports = ObservacionesRepository;