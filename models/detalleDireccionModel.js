var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var detalleDireccionSchema = new Schema({
    pacienteId: { type: String },
    direccionId: { type: String }
});

module.exports = mongoose.model('DetalleDireccion', detalleDireccionSchema);