const { Proveedor } = require('../../models');

const createProveedor = async (req, res) => {
  try {
    const proveedor = await Proveedor.create(req.body);
    res.status(201).json({ message: 'Proveedor creado.', proveedor });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear proveedor', error: error.message });
  }
};

const getAllProveedores = async (req, res) => {
  try {
    const proveedores = await Proveedor.findAll();
    res.status(200).json(proveedores);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener proveedores', error: error.message });
  }
};

const getProveedorById = async (req, res) => {
  try {
    const proveedor = await Proveedor.findByPk(req.params.id);
    if (!proveedor) return res.status(404).json({ message: 'Proveedor no encontrado.' });

    res.status(200).json(proveedor);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener proveedor', error: error.message });
  }
};

const updateProveedor = async (req, res) => {
  try {
    const proveedor = await Proveedor.findByPk(req.params.id);
    if (!proveedor) return res.status(404).json({ message: 'Proveedor no encontrado.' });

    await proveedor.update(req.body);
    res.status(200).json({ message: 'Proveedor actualizado.', proveedor });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar proveedor', error: error.message });
  }
};

const deleteProveedor = async (req, res) => {
  try {
    const result = await Proveedor.destroy({ where: { id: req.params.id } });

    if (result === 0) return res.status(404).json({ message: 'Proveedor no encontrado.' });

    res.status(200).json({ message: 'Proveedor eliminado.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar proveedor', error: error.message });
  }
};

module.exports = {
  createProveedor,
  getAllProveedores,
  getProveedorById,
  updateProveedor,
  deleteProveedor,
};
