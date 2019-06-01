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
                temp = new Obervacion(element.idobservacion, element.fecha, element.descripcion, element.tipo_observacion_idtipo_observacion, element.estudiante_idestudiante, element.reporte_idreporte, element.vision_idvision, element.usuario_id, element.observacion);
                observaciones.push(temp);
            });
             return observaciones;
        });
    }
    async getObservacionesNoReporte(id){
        return await con.query(`
            SELECT * FROM observacion
            INNER JOIN estudiante ON estudiante.idestudiante = observacion.estudiante_idestudiante
            INNER JOIN tipo_observacion ON tipo_observacion.idtipo_observacion = observacion.tipo_observacion_idtipo_observacion
            where (estudiante.idestudiante = ${id} AND observacion.reporte_idreporte IS NULL) ;
        `).then(function(result){
            var observaciones = [];
            var temp;
            
            result.forEach(element => {
                temp = new Obervacion(element.idobservacion, element.fecha, element.descripcion, element.tipo_observacion_idtipo_observacion, element.estudiante_idestudiante, element.reporte_idreporte, element.vision_idvision, element.usuario_id, element.observacion);
                
                temp.fecha = temp.fecha.toDateString();
                observaciones.push(temp);
            });
             return observaciones;
        });
    }
    async UpdateObservacion(idReporte,ID_ob){
        return await con.query(`
         UPDATE observacion
         SET observacion.reporte_idreporte = ${idReporte}
         WHERE observacion.idobservacion = ${ID_ob};
        `).then(function(result){
             return true;
        });
    }

    
    async SetObservacion(ob){
        return await con.query(`
            INSERT INTO observacion (idobservacion, fecha, descripcion, tipo_observacion_idtipo_observacion, estudiante_idestudiante, reporte_idreporte, vision_idvision, usuario_id)
            VALUES (NULL, '${ob.fecha}', '${ob.descripcion}', '${ob.tipo_observacion_id}', '${ob.estudiante_idestudiante}', NULL, '${ob.vision_idvision}', '${ob.usuario_id}');
        `).then(function(result){
             return true;
        });
    }




}
module.exports = ObservacionesRepository;