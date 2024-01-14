var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var veterinarioSchema = new Schema({
    nombre: { type: String },
    rut: { type: String },
    edad: { type: String },
    especialidadId: { type: String }
});

module.exports = mongoose.model('Veterinario', veterinarioSchema);