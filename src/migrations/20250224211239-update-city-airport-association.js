'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * 
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint('Airports',{
      
      type:'FOREIGN KEY',
      fields:['cityId'],
      name:'city foreign key constraint',
      references:{
        table:'Cities',
        field:'id'
      },
      onUpdate:'cascade',
      onDelete:'cascade'
    })

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
    awai   
    */
   await queryInterface.removeConstraint('Airports','city foreign key constraint')
  }
};
