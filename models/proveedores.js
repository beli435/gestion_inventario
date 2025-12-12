"use strict";
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Proveedor extends Model {
    static associate(models) {
      // define association here
    }
  }
  Proveedor.init({
    nombre: DataTypes.STRING,
    contacto: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Proveedor',
    tableName: 'proveedores',
  });
  return Proveedor;
};
