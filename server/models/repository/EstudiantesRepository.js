const con = require('../../connection.js');
const Estudiante = require('../identity/Estudiante.js');


class EstudianteRepository{

    async getEstudiantesCurso(id){
        return await con.query(`
            SELECT * FROM estudiantes

            where estudiantes.grupo_idgrupo = ${id} ;
        `).then(function(result){

            var Estudiantes = [];
            var temp;
            
            result.forEach(element => {
                temp = new Estudiante(element[0].idestudiante, element[0].nombre,  element[0].apellido);
                Estudiantes.push(temp);
            });
             return Estudiantes;
        });
    }
    async getOne(id){
        return await con.query(`
            SELECT * FROM estudiantes

            where estudiantes.idestudiante = ${id} ;
        `).then(function(result){

            var Estudiantes = [];
            var temp;

            temp = new Estudiante(element[0].idestudiante, element[0].nombre,  element[0].apellido);
            Estudiantes.push(temp);
            
            return Estudiantes;
        });
    }



}
module.exports = EstudianteRepository;