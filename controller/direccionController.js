var direccion = require('../models/direccionModel.js');

var direccionController = {
    getDireccion: (req, res) => {
        direccion.find({}, function (err, direccion) {
            if (err) {
                res.status(500);
                res.json({ status: 500, err });
            } else {
                res.json(direccion);
            }
        });
    },
    createDireccion:  (req, res) => {
        var newDireccion = new direccion(req.body);
        newDireccion.save(function (err, direccion) {
            if (err) {
                res.status(500);
                res.json({ status: 500, err });
            } else {
                res.json(direccion);
            }
        });
    },
    updateDireccion: (req, res) => {
        direccion.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true }, function (err, direccion) {
            if (err) {
                res.status(500);
                res.json({ status: 500, err });
            } else {
                res.json(direccion);
            }
        });
    },
    getDireccionById: (req, res) => {
        direccion.findOne({ _id: req.params._id }, function (err, direccion) {
            if (err) {
                res.status(500);
                res.json({ status: 500, err });
            } else {
                res.json(direccion);
            }
        });
    }
}

module.exports = direccionController;