const con = require('./../../connection.js');
const Grupo = require('./../identity/Grupo.js');


class GrupoRepository {
    async getGrupos(id) {
        return await con.query(`
            SELECT * FROM grupo
             inner join
             usuario_asignatura_grupo on
             grupo.idgrupo = usuario_asignatura_grupo.grupo_idgrupo
             where usuario_asignatura_grupo.usuario_id = ${id} ;
        `).then(function (result) {
            var grupos = [];
            var temp;
            result.forEach(element => {
                temp = new Grupo(element.idgrupo, element.salon);
                grupos.push(temp);
            });
            return grupos;
        });
    }

    async getGruposN(id) {
        return await con.query(`
            SELECT * FROM grupos
             inner join
             usuario_asignatura_grupo on
             grupos.idgrupo = usuario_asignatura_grupo.grupo_idgrupo
             where usuario_asignatura_grupo.usuario_id != ${id} ;
             `).then(function (result) {
            var grupos = [];
            var temp;
            result.forEach(element => {
                temp = new Grupo(element.idgrupo, element.salon);
                grupos.push(temp);
            });
            return grupos;
        });
    }
    async getGruposN(id) {
        return await con.query(`
            SELECT * FROM grupos
             inner join
             usuario_asignatura_grupo on
             grupos.idgrupo = usuario_asignatura_grupo.grupo_idgrupo
             where usuario_asignatura_grupo.usuario_id != ${id} ;
             `).then(function (result) {
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