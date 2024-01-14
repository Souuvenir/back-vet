var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var comunaSchema = new Schema({
    descripcion: { type: String }
});

module.exports = mongoose.model('Comuna', comunaSchema);