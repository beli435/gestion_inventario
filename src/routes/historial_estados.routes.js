const { Router } = require('express');

const {
  createHistorial,
  getAllHistorial,
  getHistorialById,
  updateHistorial,
  deleteHistorial,
} = require('../controllers/historial_estados.controller');

const router = Router();

router.post('/', createHistorial);
router.get('/', getAllHistorial);
router.get('/:id', getHistorialById);
router.put('/:id', updateHistorial);
router.delete('/:id', deleteHistorial);

module.exports = router;
