// Archivo: src/controllers/categorias.controller.js

const { Categoria } = require('../../models');

// ===============================================================
// ------------------ OPERACIONES CRUD ---------------------------
// ==============================================================

// Crear categoría
const createCategoria = async (req, res) => {
  try {
    const nuevaCategoria = await Categoria.create(req.body);

    res.status(201).json({
      message: 'Categoría creada exitosamente.',
      categoria: nuevaCategoria,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la categoría', error: error.message });
  }
};

// Obtener todas las categorías
const getAllCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.findAll();
    res.status(200).json(categorias);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener categorías', error: error.message });
  }
};

// Obtener categoría por ID
const getCategoriaById = async (req, res) => {
  try {
    const { id } = req.params;
    const categoria = await Categoria.findByPk(id);

    if (!categoria) {
      return res.status(404).json({ message: 'Categoría no encontrada.' });
    }

    res.status(200).json(categoria);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la categoría', error: error.message });
  }
};

// Actualizar categoría
const updateCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const categoria = await Categoria.findByPk(id);

    if (!categoria) {
      return res.status(404).json({ message: 'Categoría no encontrada.' });
    }

    await categoria.update(req.body);

    res.status(200).json({ message: 'Categoría actualizada exitosamente.', categoria });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la categoría', error: error.message });
  }
};

// Eliminar categoría
const deleteCategoria = async (req, res) => {
  try {
    const { id } = req.params;

    const filasEliminadas = await Categoria.destroy({
      where: { id },
    });

    if (filasEliminadas === 0) {
      return res.status(404).json({ message: 'Categoría no encontrada.' });
    }

    res.status(200).json({ message: 'Categoría eliminada exitosamente.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la categoría', error: error.message });
  }
};

// Exportación
module.exports = {
  createCategoria,
  getAllCategorias,
  getCategoriaById,
  updateCategoria,
  deleteCategoria,
};
