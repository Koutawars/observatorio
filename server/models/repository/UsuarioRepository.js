const con = require('./../../connection.js');
const Usuario = require('./../identity/Usuario.js');
const TipoUsuario = require('./../identity/TipoUsuario.js');


class UsuarioRepository {
    /*
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
    */
   
    async getOneCorreo(correo){
        return await con.query(`
        SELECT * FROM usuario inner join tipo_usuario on usuario.tipo_usuario_idtipo_usuario = tipo_usuario.idtipo_usuario  where usuario.correo = '${correo}';
        `).then(function(result){
            let tipo, usuario;
            if(result[0]){
                tipo = new TipoUsuario(result[0].tipo_usuario_idtipo_usuario, result[0].nombre_tipo_usuario);
                usuario = new Usuario(result[0].id, result[0].nombre, result[0].apellido, result[0].direccion,  result[0].correo, result[0].telefono, result[0].documento ,result[0].password, tipo);
                return usuario;
            }
            return null;
        });
    }

}

module.exports = UsuarioRepository;