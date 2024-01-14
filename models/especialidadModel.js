var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var especialidadSchema = new Schema({
    descripcion: { type: String }
});

module.exports = mongoose.model('Especialidad', especialidadSchema);
