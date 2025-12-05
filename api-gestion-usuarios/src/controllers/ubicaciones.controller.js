const { Ubicacion } = require('../../models');

const createUbicacion = async (req, res) => {
  try {
    const nuevaUbicacion = await Ubicacion.create(req.body);

    res.status(201).json({
      message: 'Ubicación creada exitosamente.',
      ubicacion: nuevaUbicacion,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear ubicación', error: error.message });
  }
};

const getAllUbicaciones = async (req, res) => {
  try {
    const ubicaciones = await Ubicacion.findAll();
    res.status(200).json(ubicaciones);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener ubicaciones', error: error.message });
  }
};

const getUbicacionById = async (req, res) => {
  try {
    const ubicacion = await Ubicacion.findByPk(req.params.id);
    if (!ubicacion) return res.status(404).json({ message: 'Ubicación no encontrada.' });

    res.status(200).json(ubicacion);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener ubicación', error: error.message });
  }
};

const updateUbicacion = async (req, res) => {
  try {
    const ubicacion = await Ubicacion.findByPk(req.params.id);
    if (!ubicacion) return res.status(404).json({ message: 'Ubicación no encontrada.' });

    await ubicacion.update(req.body);
    res.status(200).json({ message: 'Ubicación actualizada.', ubicacion });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar ubicación', error: error.message });
  }
};

const deleteUbicacion = async (req, res) => {
  try {
    const result = await Ubicacion.destroy({ where: { id: req.params.id } });

    if (result === 0) return res.status(404).json({ message: 'Ubicación no encontrada.' });

    res.status(200).json({ message: 'Ubicación eliminada.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar ubicación', error: error.message });
  }
};

module.exports = {
  createUbicacion,
  getAllUbicaciones,
  getUbicacionById,
  updateUbicacion,
  deleteUbicacion,
};
