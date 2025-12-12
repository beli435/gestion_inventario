"use strict";
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    static associate(models) {
      // define association here
    }
  }
  Categoria.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Categoria',
    tableName: 'categorias',
  });
  return Categoria;
};
