var veterinario = require('../models/veterinarioModel.js');

var veterinarioController = {
    getVeterinario: (req, res) => {
        veterinario.find({}, function (err, veterinario) {
            if (err) {
                res.status(500);
                res.json({ status: 500, err });
            } else {
                res.json(veterinario);
            }
        });
    },
    getVeterinarioById: (req, res) => {
        veterinario.findOne({ id: req.params._id }, function (err, veterinario) {
            if (err) {
                res.status(500);
                res.json({ status: 500, err });
            } else {
                res.json(veterinario);
            }
        });
    },
    createVeterinario: (req, res) => {
        var newVeterinario = new veterinario(req.body);
        newVeterinario.save(function (err, veterinario) {
            if (err) {
                res.status(500);
                res.json({ status: 500, err });
            } else {
                res.json(veterinario);
            }
        });
    },
    updateVeterinario: (req, res) => {
        veterinario.findOneAndUpdate({ id: req.params._id }, req.body, { new: true }, function (err, veterinario) {
            if (err) {
                res.status(500);
                res.json({ status: 500, err });
            } else {
                res.json(veterinario);
            }
        });
    },
    deleteVeterinario: (req, res) => {
        veterinario.remove({ id: req.params._id }, function (err, veterinario) {
            if (err) {
                res.status(500);
                res.json({ status: 500, err });
            } else {
                res.json({ message: 'Veterinario eliminado correctamente' });
            }
        });
    }
}

module.exports = veterinarioController;