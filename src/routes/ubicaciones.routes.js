const { Router } = require('express');
const {
  createUbicacion,
  getAllUbicaciones,
  getUbicacionById,
  updateUbicacion,
  deleteUbicacion,
} = require('../controllers/ubicaciones.controller');

const router = Router();

router.post('/', createUbicacion);
router.get('/', getAllUbicaciones);
router.get('/:id', getUbicacionById);
router.put('/:id', updateUbicacion);
router.delete('/:id', deleteUbicacion);

module.exports = router;
