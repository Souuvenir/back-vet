const express = require('express');

const router =express.Router();
const boletaController = require('../controller/boletaController');
const citaController = require('../controller/citaController');
const comunaController = require('../controller/comunaController');
const detalleDireccionController = require('../controller/detalleDireccionController');
const direccionController = require('../controller/direccionController');
const especialidadController = require('../controller/especialidadController');
const pacienteController = require('../controller/pacienteController');
const usuarioController = require('../controller/usuarioController');
const veterinarioController = require('../controller/veterinarioController');

// 0........Rutas de Boleta
router.get('/boleta', boletaController.getBoleta);
router.get('/boletabyid/:_id', boletaController.getBoletaById);
router.post('/boleta', boletaController.createBoleta);
router.put('/boleta/:_id', boletaController.updateBoleta);
router.delete('/boleta/:_id', boletaController.deleteBoleta);

// Rutas de Cita
router.get('/cita', citaController.getCita);
router.get('/citabyid/:_id', citaController.getCitaById);
router.get('/cita/all', citaController.getAll);
router.post('/createCita', citaController.createCita);
router.put('/cita/:_id', citaController.updateCita);
router.delete('/cita/:_id', citaController.deleteCita);

// Rutas de Comuna
router.get('/comunabyid/:id', comunaController.getComunaByid);


// Rutas de DetalleDireccion
router.post('/createdetalleDireccion', detalleDireccionController.createDetalleDireccion);
router.get('/detalleDireccion/:id', detalleDireccionController.getDetalleDireccionById);


// Rutas de Direccion
router.get('/direccion', direccionController.getDireccion);
router.post('/direccion', direccionController.createDireccion);
router.put('/direccion/:_id', direccionController.updateDireccion);
router.get('/direccion/:_id', direccionController.getDireccionById);

// Rutas de Especialidad
router.get('/especialidadbyid/:id', especialidadController.getEspecialidadById);


// Rutas de Paciente
router.get('/paciente', pacienteController.getPaciente);
router.get('/paciente/:_id', pacienteController.getPacienteById);
router.post('/paciente', pacienteController.createPaciente);
router.put('/paciente/:_id', pacienteController.updatePaciente);
router.delete('/paciente/:_id', pacienteController.deletePaciente);


// Rutas de Usuario
router.get('/usuariobyid/:_id', usuarioController.getUsuarioById);
router.post('/register', usuarioController.createUsuario);
router.post ('/login', usuarioController.login);

// Rutas de Veterinario
router.get('/veterinario', veterinarioController.getVeterinario);
router.get('/veterinario/:id', veterinarioController.getVeterinarioById);
router.post('/veterinario', veterinarioController.createVeterinario);
router.put('/veterinario/:id', veterinarioController.updateVeterinario);
router.delete('/veterinario/:id', veterinarioController.deleteVeterinario);

module.exports = router;