const { Router } = require('express');
const {
  createHistorialEstado,
  getAllHistorialEstados,
  getHistorialEstadoById,
  updateHistorialEstado,
  deleteHistorialEstado,
} = require('../controllers/historial_estados.controller');

const router = Router();

router.post('/', createHistorialEstado);
router.get('/', getAllHistorialEstados);
router.get('/:id', getHistorialEstadoById);
router.put('/:id', updateHistorialEstado);
router.delete('/:id', deleteHistorialEstado);

module.exports = router;
