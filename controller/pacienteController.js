var paciente = require('../models/pacienteModel');

var pacienteController = {
    getPaciente: (req, res) => {
        paciente.find({}, function (err, paciente) {
            if (err) {
                res.status(500);
                res.json({ status: 500, err });
            } else {
                res.json(paciente);
            }
        });
    },
    getPacienteById: (req, res) => {
        paciente.findOne({ _id: req.params._id }, function (err, paciente) {
            if (err) {
                res.status(500);
                res.json({ status: 500, err });
            } else {
                res.json(paciente);
            }
        });
    },
    createPaciente: (req, res) => {
        var newPaciente = new paciente(req.body);
        newPaciente.save(function (err, paciente) {
            if (err) {
                res.status(500);
                res.json({ status: 500, err });
            } else {
                res.json(paciente);
            }
        });
    },
    updatePaciente:  (req, res) => {
        paciente.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true }, function (err, paciente) {
            if (err) {
                res.status(500);
                res.json({ status: 500, err });
            } else {
                res.json(paciente);
            }
        });
    },
    deletePaciente: (req, res) => {
        paciente.findOneAndDelete({ _id: req.params._id }, function (err, paciente) {
            if (err) {
                res.status(500);
                res.json({ status: 500, err });
            } else {
                res.json(paciente);
            }
        });
    }
}

module.exports = pacienteController;