const con = require('./../../connection.js');
const Grupo = require('./../identity/Grupo.js');


class GrupoRepository {
    async getGrupos(id) {
        return await con.query(`
            SELECT * FROM grupo
             inner join
             usuario_asignatura_grupo on
             grupo.idgrupo = usuario_asignatura_grupo.grupo_idgrupo
             inner join
             grado on
             grupo.idgrupo = grado.idgrado
             where usuario_asignatura_grupo.usuario_id = ${id} ;
        `).then(function (result) {
            var grupos = [];
            var temp;
            result.forEach(element => {
                temp = new Grupo(element.idgrupo, element.salon, element.grado);
                grupos.push(temp);
            });
            return grupos;
        });
    }

<<<<<<< HEAD
=======
    async getGruposTodos(){
        return await con.query(`
            SELECT * FROM grupo
             inner join
             usuario_asignatura_grupo on
             grupo.idgrupo = usuario_asignatura_grupo.grupo_idgrupo
             inner join
             grado on
             grupo.idgrupo = grado.idgrado;
        `).then(function (result) {
            var grupos = [];
            var temp;
            result.forEach(element => {
                temp = new Grupo(element.idgrupo, element.salon, element.grado);
                grupos.push(temp);
            });
            return grupos;
        });
    }

>>>>>>> parent of 2a0e6aa... arreglar
    async getGruposN(id) {
        return await con.query(`
                SELECT * FROM grupo
                inner join
                usuario_asignatura_grupo on
                grupo.idgrupo = usuario_asignatura_grupo.grupo_idgrupo
                inner join
                grado on
                grupo.idgrupo = grado.idgrado
                where usuario_asignatura_grupo.usuario_id != ${id} ;
             `).then(function (result) {
            var grupos = [];
            var temp;
            console.log()
            result.forEach(element => {
                temp = new Grupo(element.idgrupo, element.salon, element.grado);
                grupos.push(temp);
            });
            return grupos;
        });
    }

}
module.exports = GrupoRepository;