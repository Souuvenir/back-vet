var detalleDireccion = require('../models/detalleDireccionModel.js');

var detalleDireccionController = {
    getDetalleDireccionById: (req, res) => {
        detalleDireccion.findOne({ id: req.params._id }, function (err, detalleDireccion) {
            if (err) {
                res.status(500);
                res.json({ status: 500, err });
            } else {
                res.json(detalleDireccion);
            }
        });
    },
    createDetalleDireccion: (req, res) => {
        var newDetalleDireccion = new detalleDireccion(req.body);
        newDetalleDireccion.save(function (err, detalleDireccion) {
            if (err) {
                res.status(500);
                res.json({ status: 500, err });
            } else {
                res.json(detalleDireccion);
            }
        });
    },
}

module.exports = detalleDireccionController;
