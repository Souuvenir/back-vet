var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var citaSchema = new Schema({
    fecha: { type: Date },
    hora_inicio: { type: String },
    hora_fin: { type: String },
    idPaciente: { type: String },
    idUsuario: { type: String },
    idVeterinario: { type: String },
    idBoleta: { type: String }
});

module.exports = mongoose.model('Cita', citaSchema);