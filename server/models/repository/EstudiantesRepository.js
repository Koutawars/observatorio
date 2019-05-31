const con = require('../../connection.js');
const Estudiante = require('../identity/Estudiante.js');

class EstudianteRepository{
    async getEstudiantesCurso(id){
        return await con.query(`
            SELECT * FROM estudiante
            where estudiante.grupo_idgrupo = ${id} ;
        `).then(function(result){
            var Estudiantes = [];
            var temp;
            result.forEach(element => {
                temp = new Estudiante(element.idestudiante, element.nombre,  element.apellido);
                Estudiantes.push(temp);
            });
            return Estudiantes;
        });
    }

    async getOne(id){
        return await con.query(`
            SELECT * FROM estudiante

            where estudiante.idestudiante = ${id} ;
        `).then(function(result){
            var temp;
            temp = new Estudiante(result[0].idestudiante, result[0].nombre,  result[0].apellido);
            return temp;
        });
    }



}
module.exports = EstudianteRepository;