const con = require('../../connection.js');


class UsuarioRepository {
    getAll(){
        con.query(`
            SELECT * FROM usuario INNER JOIN ;
        `, function(err, result){
            var usuarios = [];
            var temp;
            result.forEach(element => {
                temp = new TipoUsuario(elment...);
                usuarios.push(new Usuario(element.id, element.name, , temp));
            });
             return usuarios;
        });

    }

    getOne(id){
        con.query(`
            SELECT * FROM usuario INNER JOIN  where usuario.id = ${id};

        `, function(err, result){
            console.log(result);
             return new Usuario(result[0], g, new TipoUsuario(result[0], ));
        });
    }

}

module.exports = UsuarioRepository;