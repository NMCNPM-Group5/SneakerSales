'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Sneakers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sneakerID: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      brandName: {
        type: Sequelize.STRING
      },
      sizeID: {
        type: Sequelize.STRING
      },
      imgPath: {
        type: Sequelize.STRING
      },
      subImgPath: {
        type: Sequelize.STRING
      },
      description: {
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
    return queryInterface.dropTable('Sneakers');
  }
};