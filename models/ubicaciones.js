"use strict";
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ubicacion extends Model {
    static associate(models) {
      // define association here
    }
  }
  Ubicacion.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Ubicacion',
    tableName: 'ubicaciones',
  });
  return Ubicacion;
};
