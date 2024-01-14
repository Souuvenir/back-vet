var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pacienteSchema = new Schema({
    nombre: { type: String },
    fechaNacimiento: { type: Date },
    edad: { type: String },
    especie: { type: String }
});

module.exports = mongoose.model('Paciente', pacienteSchema);