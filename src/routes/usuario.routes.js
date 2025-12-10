// Archivo: src/routes/usuario.routes.js

const { Router } = require('express');
const {
  createUsuario,
  getAllUsuarios,
  getUsuarioById,
  updateUsuario,
  deleteUsuario,
} = require('../controllers/usuario.controller');

// Creamos una nueva instancia de Router
const router = Router();

// --- DEFINICIÓN DE ENDPOINTS ---

// Cuando llegue una petición POST a la raíz ('/'), se ejecutará la función `createUsuario`.
router.post('/', createUsuario);

// Cuando llegue una petición GET a la raíz ('/'), se ejecutará `getAllUsuarios`.
router.get('/', getAllUsuarios);

// `/:id` es un parámetro dinámico. Express capturará el valor y lo pondrá en `req.params.id`.
router.get('/:id', getUsuarioById);
router.put('/:id', updateUsuario);
router.delete('/:id', deleteUsuario);

// Exportamos el router para que el servidor principal lo pueda usar.
module.exports = router;