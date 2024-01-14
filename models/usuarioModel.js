var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
    nombre_usuario: { type: String },
    contrasena: { type: String },
    tipoUsuario: { type: String }});

module.exports = mongoose.model('Usuario', usuarioSchema);