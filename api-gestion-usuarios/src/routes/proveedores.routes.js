const { Router } = require('express');
const {
  createProveedor,
  getAllProveedores,
  getProveedorById,
  updateProveedor,
  deleteProveedor,
} = require('../controllers/proveedores.controller');

const router = Router();

router.post('/', createProveedor);
router.get('/', getAllProveedores);
router.get('/:id', getProveedorById);
router.put('/:id', updateProveedor);
router.delete('/:id', deleteProveedor);

module.exports = router;
