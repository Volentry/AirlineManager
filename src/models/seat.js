'use strict';
const {
  Model
} = require('sequelize');
const Seat_Type = require('../utils/common').Seat_Type
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplane,{
        foreignKey:'airplaneId',
        
      })
    }
  }
  Seat.init({
    airplaneId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    row: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    col: {
      type:DataTypes.STRING,
      allowNull:false
    },
    type: {
      type:DataTypes.ENUM,
      values:[Seat_Type.BUSINESS,Seat_Type.ECONOMY,Seat_Type.FIRST_CLASS,Seat_Type.PREMIUM_ECONOMY],
      defaultValue:Seat_Type.ECONOMY,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};