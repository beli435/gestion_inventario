const { Router } = require('express');
const {
  createReparacion,
  getAllReparaciones,
  getReparacionById,
  updateReparacion,
  deleteReparacion,
} = require('../controllers/reparaciones.controller');

const router = Router();

router.get('/api', (req, res) => {
  res.send('¡Bienvenido al API de Gestión sssssssssss!');
});

router.post('/', createReparacion);
router.get('/', getAllReparaciones);
router.get('/:id', getReparacionById);
router.put('/:id', updateReparacion);
router.delete('/:id', deleteReparacion);

module.exports = router;
