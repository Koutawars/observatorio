const con = require('../../connection.js');
const Reporte = require('../identity/Reporte.js');


class ReporteRepository {

    async getReportes(id){
        return await con.query(`
            SELECT * FROM reporte INNER JOIN observacion on reporte.idreporte = observacion.reporte_idreporte where observacion.estudiante_idestudiante=${id};
        `).then(function(result){

            var reportes = [];
            var temp;
            
            result.forEach(element => {
                temp = new Reporte(element.idreporte, element.fecha, element.tipo_reporte_idtipo_reporte );
                reportes.push(temp);
            });
             return reportes;
        });
    }
    async getReportesById(id){
        return await con.query(`
            SELECT * FROM reporte  where reporte.idreporte=${id};
        `).then(function(result){

            var reportes = [];
            var temp;
            
            result.forEach(element => {
                temp = new Reporte(element.idreporte, element.fecha, element.tipo_reporte_idtipo_reporte );
                reportes.push(temp);
            });
             return reportes;
        });
    }
    async SetReporte(ob){
        return await con.query(`
            INSERT INTO reporte (idreporte, fecha, tipo_reporte_idtipo_reporte)
            VALUES (NULL, '${ob.fecha}', '${ob.idtipo_repote}')
        `).then(function(result){
             return true;
        });
    }


}
module.exports = ReporteRepository;