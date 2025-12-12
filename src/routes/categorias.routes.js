// Archivo: src/routes/categoria.routes.js

const { Router } = require('express');
const {
  createCategoria,
  getAllCategorias,
  getCategoriaById,
  updateCategoria,
  deleteCategoria,
} = require('../controllers/categorias.controller');

const router = Router();

router.post('/', createCategoria);
router.get('/', getAllCategorias);
router.get('/:id', getCategoriaById);
router.put('/:id', updateCategoria);
router.delete('/:id', deleteCategoria);

module.exports = router;
