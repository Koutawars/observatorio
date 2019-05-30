const con = require('./../../connection.js');
const Estudiante = require('./../identity/Estudiante.js');


class EstudianteRepository{

    getEstudiantesCurso(id){
        con.query(`
            SELECT * FROM estudiantes

            where estudiantes.grupo_idgrupo = ${id} ;
        `, function(err, result){

            var Estudiantes = [];
            var temp;
            result.forEach(element => {
                temp = new Estudiante(element.idestudiante, element.nombre,  element.apellido);
                Estudiantes.push(temp);
            });
             return Estudiantes;
        });
    }
    getOne(id){
        con.query(`
            SELECT * FROM estudiantes

            where estudiantes.idestudiante = ${id} ;
        `, function(err, result){

            var Estudiantes = [];
            var temp;
            temp = new Estudiante(element[0].idestudiante, element[0].nombre,  element[0].apellido);
            Estudiantes.push(temp);
            
            return Estudiantes;
        });
    }



}
module.exports = EstudianteRepository;