var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var direccionSchema = new Schema({
    direccion: { type: String },
    comunaId: { type: String }
});

module.exports = mongoose.model('Direccion', direccionSchema);