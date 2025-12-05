const { Router } = require('express');
const {
  createProducto,
  getAllProductos,
  getProductoById,
  updateProducto,
  deleteProducto,
} = require('../controllers/productos.controller');

const router = Router();

// --- ENDPOINTS ---
router.post('/', createProducto);
router.get('/', getAllProductos);
router.get('/:id', getProductoById);
router.put('/:id', updateProducto);
router.delete('/:id', deleteProducto);

module.exports = router;
