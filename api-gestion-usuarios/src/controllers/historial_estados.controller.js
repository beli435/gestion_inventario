const { HistorialEstado } = require('../../models');

const createHistorial = async (req, res) => {
  try {
    const h = await HistorialEstado.create(req.body);
    res.status(201).json({ message: 'Estado registrado.', historial: h });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar estado', error: error.message });
  }
};

const getAllHistorial = async (req, res) => {
  try {
    const list = await HistorialEstado.findAll();
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener historial', error: error.message });
  }
};

const getHistorialById = async (req, res) => {
  try {
    const h = await HistorialEstado.findByPk(req.params.id);
    if (!h) return res.status(404).json({ message: 'Registro no encontrado.' });

    res.status(200).json(h);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener historial', error: error.message });
  }
};

const updateHistorial = async (req, res) => {
  try {
    const h = await HistorialEstado.findByPk(req.params.id);
    if (!h) return res.status(404).json({ message: 'Registro no encontrado.' });

    await h.update(req.body);
    res.status(200).json({ message: 'Registro actualizado.', historial: h });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar historial', error: error.message });
  }
};

const deleteHistorial = async (req, res) => {
  try {
    const result = await HistorialEstado.destroy({ where: { id: req.params.id } });

    if (result === 0) return res.status(404).json({ message: 'Registro no encontrado.' });

    res.status(200).json({ message: 'Registro eliminado.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar historial', error: error.message });
  }
};

module.exports = {
  createHistorial,
  getAllHistorial,
  getHistorialById,
  updateHistorial,
  deleteHistorial,
};
