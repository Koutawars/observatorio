const con = require('../../connection.js');
const Estudiante = require('../identity/Obervacion.js');


class ObervacionesRepository{

    async getObervaciones(id){
        return await con.query(`
            SELECT * FROM observacion
            INNER JOIN estudiante ON estudiante.idestudiante = observacion.estudiante_idestudiante
            where estudiante.idestudiante = ${id} ;
        `).then(function(result){

            var obervaciones = [];
            var temp;
            
            result.forEach(element => {
                temp = new Obervacion(element.idobservacion, element.fecha, element.observacioncol, element.tipo_observacion_idtipo_observacion, element.estudiante_idestudiante, element.reporte_idreporte, element.vision_idvision);
                obervaciones.push(temp);
            });
             return obervaciones;
        });
    }



}
module.exports = ObervacionesRepository;