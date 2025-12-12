"use strict";
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HistorialEstado extends Model {
    static associate(models) {
      // define association here
    }
  }
  HistorialEstado.init({
    estado: DataTypes.STRING,
    nombre: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'HistorialEstado',
    tableName: 'historial_estados',
  });
  return HistorialEstado;
};
