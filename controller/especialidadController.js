var especialidad = require('../models/especialidadModel.js');

var especialidadController = {
    getEspecialidadById: (req, res) => {
        especialidad.findOne({ id: req.params._id }, function (err, especialidad) {
            if (err) {
                res.status(500);
                res.json({ status: 500, err });
            } else {
                res.json(especialidad);
            }
        });
    }
}

module.exports = especialidadController;