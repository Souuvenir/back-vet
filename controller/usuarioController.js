var usuario = require('../models/usuarioModel.js');

var usuarioController = {
    getUsuarioById: (req, res) => {
        console.log(req.params);
        usuario.findById({ _id: req.params._id }, function (err, usuario) {
            if (err) {
                res.status(500);
                res.json({ status: 500, err });
            } else {
                res.json(usuario);
            }
        });
    },
    createUsuario: (req, res) => {
        var aux = {
            nombre_usuario: req.body.nombreUsuario,
            tipoUsuario: 'cliente',
            contrasena: req.body.password
        }
        console.log(req.body);
        console.log(aux);
        var newUsuario = new usuario(aux);
        console.log(newUsuario);
        newUsuario.save(function (err, usuario) {
            if (err) {
                res.status(500);
                res.json({ status: 500, err });
            } else {
                res.json(usuario);
            }
        });
    },
    login: (req, res) => {
        const { username, password } = req.body;
        usuario.findOne({ nombre_usuario: username }, (err, usuario) => {

            console.log('llega al controlador', username);
            if (err) {
                return res.status(500).json({
                    status: 'error',
                    message: 'Error al buscar el usuario'
                });
            }

            if (!usuario) {
                return res.status(404).json({
                    status: 'error',
                    message: 'Usuario no encontrado'
                });
            }

            // Verificar la contraseña
            if (usuario.contrasena !== password) {
                return res.status(401).json({
                    status: 'error',
                    message: 'Contraseña incorrecta'
                });
            }
            const userId = usuario._id;
            const userName = usuario.nombre_usuario;
            console.log('usuario encontrado', usuario);
            res.body = usuario;
            console.log(res);
            res.status(200).json({
                status: 'success',
                message: 'Inicio de sesión exitoso',
                userId: userId,
                usuario: userName
            });
        });
    }
}

module.exports = usuarioController;