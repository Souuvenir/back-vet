var Cita = require('../models/citaModel.js');

var citaController = {
    getCita: (req, res) => {
        Cita.find({}, (err, citas) => {
            if (err) {
                return res.status(500).json({
                    status: 'error',
                    message: 'Error al obtener las citas'
                });
            }
            res.status(200).json({
                status: 'success',
                citas
            });
        });
    },
    getCitaById: (req, res) => {
        Cita.findById({ _id: req.params._id }).exec((err, cita) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    status: 'error',
                    message: 'Error al obtener la cita por ID'
                });
            }
            res.status(200).json({
                status: 'success',
                cita
            });
            console.log(cita._id);
        });
    },
    getAll: (req, res) => {
        Cita.find({}, (err, citas) => {
            if (err) {
                return res.status(500).json({
                    status: 'error',
                    message: 'Error al obtener todas las citas'
                });
            }
            res.status(200).json({
                status: 'success',
                citas
            });
        });
    },

    createCita: (req, res) => {
        console.log(req.body);
        var dateTime = new Date(req.body.date);
        
        var fecha = dateTime.toISOString().split('T')[0];
        var horaInicio = dateTime.toTimeString().split(' ')[0];
        
        var horaFin = new Date(dateTime.getTime() + 60 * 60 * 1000).toTimeString().split(' ')[0];

        var especie = req.body.especie;
        var idBoleta = null;
        var idVet = null;

        if (especie == 'Felino') {
            idVet = 'vet1';
        }
        if (especie == 'Canino') {
            idVet = 'vet2';
        }
        if (especie == 'Exotico') {
            idVet = 'vet3';
        }

        var auxCita = {
            fecha: fecha,
            hora_inicio: horaInicio,
            hora_fin: horaFin,
            idPaciente: req.body.idPaciente,
            idUsuario: req.body.idUsuario,
            idVeterinario: idVet,
            idBoleta: idBoleta
        }

        var newCita = new Cita(auxCita);
        console.log(newCita);
        
        newCita.save((err, cita) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    status: 'error',
                    message: 'Error al guardar la cita'
                });
            }
            res.status(200).json({
                status: 'success',
                cita
            });
        });
    },
    updateCita: (req, res) => {
    var citaId = req.params._id;
    var params = req.body;
    try {
        Cita.findByIdAndUpdate(citaId, params, { new: true }, (err, citaUpdated) => {
            console.log(citaUpdated);
            if (err) {
                return res.status(500).json({
                    status: 'error',
                    message: 'Error al actualizar la cita'
                });
            } else if (!citaUpdated) {
                return res.status(404).json({
                    status: 'error',
                    message: 'No existe la cita'
                });
            } else {
                return res.status(200).json({
                    status: 'success',
                    cita: citaUpdated
                });
            }
        });
    } catch (err) {
        return res.status(500).json({
            status: 'error',
            message: 'Error interno del servidor'
        });
    }
},
    deleteCita: (req, res) => {
        Cita.findOneAndRemove({ _id: req.params._id }, (err, cita) => {
            if (err) {
                return res.status(500).json({
                    status: 'error',
                    message: 'Error al eliminar la cita'
                });
            }
            res.status(200).json({
                status: 'success',
                cita
            });
        });
    }
};

module.exports = citaController;
