const con = require('../../connection.js');
const Vision = require('../identity/Vision.js');


class VisionRepository {
    async getVisiones(){
        return await con.query(`
            SELECT * FROM vision;
        `).then(function(result){

            var visiones = [];
            var temp;
            
            result.forEach(element => {
                temp = new Vision(element.idvision, element.nivel);
                visiones.push(temp);
            });
             return visiones;
        });
    }



}
module.exports = VisionRepository;