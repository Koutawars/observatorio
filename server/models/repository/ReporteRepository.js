const con = require('../../connection.js');
const Reporte = require('../identity/Reporte.js');


class ReporteRepository {

    async getReportes(id){
        return await con.query(`
            SELECT * FROM reporte where reporte.idreporte=${id};
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



}
module.exports = ReporteRepository;