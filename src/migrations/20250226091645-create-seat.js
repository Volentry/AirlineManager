'use strict';
/** @type {import('sequelize-cli').Migration} */
const Seat_Type = require('../utils/common').Seat_Type
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Seats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      airplaneId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Airplanes',
          key:'Id'
        },
        onDelete:'CASCADE'
      },
      row: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      col: {
        type: Sequelize.STRING,
        allowNull:false
      },
      type: {
        type: Sequelize.ENUM,
        values:[Seat_Type.BUSINESS,Seat_Type.ECONOMY,Seat_Type.FIRST_CLASS,Seat_Type.PREMIUM_ECONOMY],
      defaultValue:Seat_Type.ECONOMY,
      allowNull:false

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Seats');
  }
};