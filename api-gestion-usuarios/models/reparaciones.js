'rep strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reparaciones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  reparaciones.init({
    nombre: DataTypes.STRING,
    marca: DataTypes.STRING,
    tiempo: DataTypes.STRING,
    cantidad: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'reparaciones',
  });
  return reparaciones;
};