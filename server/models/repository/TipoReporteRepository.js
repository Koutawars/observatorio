const con = require('../../connection.js');
const TipoReporte = require('../identity/TipoReporte.js');


class TipoReporteRepository {

    async getTipoReporte(){
        return await con.query(`
            SELECT * FROM tipo_reporte;
        `).then(function(result){

            var reportes = [];
            var temp;
            
            result.forEach(element => {
                temp = new TipoReporte(element.idtipo_reporte, element.reporte );
                reportes.push(temp);
            });
             return reportes;
        });
    }



}
module.exports = TipoReporteRepository;