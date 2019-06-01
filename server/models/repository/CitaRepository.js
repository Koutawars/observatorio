const con = require('../../connection.js');
const Cita = require('../identity/Cita.js');


class CitaRepository {

    async getObservaciones(id){
        return await con.query(`
            SELECT * FROM cita;
        `).then(function(result){

            var citas = [];
            var temp;
            
            result.forEach(element => {
                temp = new Cita(element.idcita, element.fecha, element.lugar, element.usuario_id, element.acudiente_id_acudiente, element.acuerdo_idacuerdo, element.reporte_idreporte );
                citas.push(temp);
            });
             return citas;
        });
    }



}
module.exports = CitaRepository;