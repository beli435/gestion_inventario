const { Router } = require('express');
const {
  // Controladores de productos (debes crearlos en productos.controller.js)
  getAllProductos,
  getProductoById,
  createProducto,
  updateProducto,
  deleteProducto
} = require('../controllers/productos.controller');

const router = Router();

// Rutas CRUD para productos
router.get('/', getAllProductos);
router.get('/:id', getProductoById);
router.post('/', createProducto);
router.put('/:id', updateProducto);
router.delete('/:id', deleteProducto);

module.exports = router;
