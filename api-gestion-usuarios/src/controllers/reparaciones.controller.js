const { reparaciones } = require('../../models');

const createReparacion = async (req, res) => {
  try {
    const rep = await reparaciones.create(req.body);
    res.status(201).json({ message: 'Reparación registrada.', rep });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar reparación', error: error.message });
  }
};

const getAllReparaciones = async (req, res) => {
  try {
    const list = await reparaciones.findAll();
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener reparaciones', error: error.message });
  }
};

const getReparacionById = async (req, res) => {
  try {
    const rep = await reparaciones.findByPk(req.params.id);
    if (!rep) return res.status(404).json({ message: 'Reparación no encontrada.' });

    res.status(200).json(rep);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener reparación', error: error.message });
  }
};

const updateReparacion = async (req, res) => {
  try {
    const rep = await reparaciones.findByPk(req.params.id);
    if (!rep) return res.status(404).json({ message: 'Reparación no encontrada.' });

    await rep.update(req.body);
    res.status(200).json({ message: 'Reparación actualizada.', rep });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar reparación', error: error.message });
  }
};

const deleteReparacion = async (req, res) => {
  try {
    const result = await reparaciones.destroy({ where: { id: req.params.id } });

    if (result === 0) return res.status(404).json({ message: 'Reparación no encontrada.' });

    res.status(200).json({ message: 'Reparación eliminada.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar reparación', error: error.message });
  }
};

module.exports = {
  createReparacion,
  getAllReparaciones,
  getReparacionById,
  updateReparacion,
  deleteReparacion,
};
