'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      guestName: {
        type: Sequelize.STRING
      },
      guestPhone: {
        type: Sequelize.STRING
      },
      guestAddress: {
        type: Sequelize.STRING
      },
      guestCity: {
        type: Sequelize.STRING
      },
      guestEmail: {
        type: Sequelize.STRING
      },
      isCOD: {
        type: Sequelize.BOOLEAN
      },
      note: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Orders');
  }
};