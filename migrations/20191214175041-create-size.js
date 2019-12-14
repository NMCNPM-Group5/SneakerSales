'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Sizes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      size35: {
        type: Sequelize.INTEGER
      },
      size36: {
        type: Sequelize.INTEGER
      },
      size37: {
        type: Sequelize.INTEGER
      },
      size38: {
        type: Sequelize.INTEGER
      },
      size39: {
        type: Sequelize.INTEGER
      },
      size40: {
        type: Sequelize.INTEGER
      },
      size41: {
        type: Sequelize.INTEGER
      },
      size42: {
        type: Sequelize.INTEGER
      },
      size43: {
        type: Sequelize.INTEGER
      },
      size44: {
        type: Sequelize.INTEGER
      },
      total: {
        type: Sequelize.INTEGER
      },
      sold: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Sizes');
  }
};