const con = require('./../../connection.js');
const Usuario = require('./../identity/Usuario.js');
const TipoUsuario = require('./../identity/TipoUsuario.js');


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
    getOneCorreo(correo){
        con.query(`
            SELECT * FROM usuario inner join tipo_usuario on usuario.id = tipo_usuario.idtipo_usuario  where usuario.correo = ${correo};

        `, function(err, result){
            if(!result){
                console.log(result);
                tipo = new TipoUsuario(result[0].idtipo_usuario, result[0].nombre_tipo_usuario);
                return new Usuario(result[0].id, result[0].nombre, result[0].apellido, result[0].direccion,  result[0].correo, result[0].telefono, result[0].documento , tipo);
            }
            return null;
        });
    }

}

module.exports = UsuarioRepository;