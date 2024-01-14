var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var boletaSchema = new Schema({
    monto: { type: Number },
    fecha: { type: Date }
});

module.exports = mongoose.model('Boleta', boletaSchema);