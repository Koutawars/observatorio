const con = require('../../connection.js');
const TipoObs = require('../identity/TipoObs.js');


class TipoObsRepository {

    async getObservaciones(id){
        return await con.query(`
            SELECT * FROM tipo_observacion;
        `).then(function(result){

            var tipoObs = [];
            var temp;
            
            result.forEach(element => {
                temp = new TipoObs(element.idtipo_observacion, element.observacion);
                tipoObs.push(temp);
            });
             return tipoObs;
        });
    }



}
module.exports = TipoObsRepository;