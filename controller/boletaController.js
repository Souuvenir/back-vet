var Boleta = require('../models/boletaModel.js');

var boletaController = {
    getBoleta: (req, res) => {
        Boleta.find({}).exec((err, boleta) => {
            if (err) {
                return res.status(500).json({
                    status: 'error',
                    message: 'Error al obtener las boletas'
                });
            }
            res.status(200).json({
                status: 'success',
                boleta
            });
        });
    },
    getBoletaById: (req, res) => {
        Boleta.findOne({ _id: req.params._id }).exec((err, boleta) => {
            if (err) {
                return res.status(500).json({
                    status: 'error',
                    message: 'Error al obtener la boleta por ID'
                });
            }
            res.status(200).json({
                status: 'success',
                boleta
            });
        });
    },
    createBoleta: (req, res) => {
        var newBoleta = new Boleta(req.body);
        newBoleta.save((err, boleta) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    status: 'error',
                    message: 'Error al guardar la boleta'
                });
            }

            res.status(200).json({
                status: 'success',
                boleta
            });
        });
    },
    updateBoleta: (req, res) => {
        var boletaId = req.params._id;
        var params = req.body;

        try {
            Boleta.findByIdAndUpdate(boletaId, params, { new: true }, (err, boletaUpdated) => {
                if (err) {
                    return res.status(500).json({
                        status: 'error',
                        message: 'Error al actualizar la boleta'
                    });
                } else if (!boletaUpdated) {
                    return res.status(404).json({
                        status: 'error',
                        message: 'No existe la boleta'
                    });
                } else {
                    return res.status(200).json({
                        status: 'success',
                        boleta: boletaUpdated
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
    deleteBoleta: (req, res) => {
        var boletaId = req.params._id;
        console.log(boletaId);
        try {
            Boleta.findByIdAndDelete(boletaId, (err, boleta) => {
                if (err) {
                    return res.status(500).json({
                        status: 'error',
                        message: 'Error al eliminar la boleta'
                    });
                }
                res.status(200).json({
                    status: 'success',
                    boleta
                });
            });
        } catch (error) {
            return res.status(500).json({
                status: 'error',
                message: 'Error interno del servidor'
            });
        }
    }
};

module.exports = boletaController;
