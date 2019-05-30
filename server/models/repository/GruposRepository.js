const con = require('./../../connection.js');
const Grupo = require('./../identity/Grupo.js');


class GrupoRepository{

    getGrupos(id){
        con.query(`
            SELECT * FROM grupos
             inner join
             usuario_asignatura_grupo on
             grupos.idgrupo = usuario_asignatura_grupo.grupo_idgrupo
             where usuario_asignatura_grupo.usuario_id = ${id} ;
        `, function(err, result){
            
            if(err) throw err;
            var grupos = [];
            var temp;
            result.forEach(element => {
                temp = new Grupo(element.idgrupo, element.salon);
                grupos.push(temp);
            });
             return grupos;
        });
    }
    getGruposN(id){
        con.query(`
            SELECT * FROM grupos
             inner join
             usuario_asignatura_grupo on
             grupos.idgrupo = usuario_asignatura_grupo.grupo_idgrupo
             where usuario_asignatura_grupo.usuario_id != ${id} ;
        `, function(err, result){
            
            if(err) throw err;
            var grupos = [];
            var temp;
            result.forEach(element => {
                temp = new Grupo(element.idgrupo, element.salon);
                grupos.push(temp);
            });
             return grupos;
        });
    }



}
module.exports = GrupoRepository;