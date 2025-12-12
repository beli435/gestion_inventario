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
  }, {
    sequelize,
    modelName: 'Categoria',
    tableName: 'categoria',
  });
  return Categoria;
};
