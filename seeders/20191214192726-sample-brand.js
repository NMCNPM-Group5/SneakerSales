"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    let data = [
      {
        name: "Adidas",
        description: "ADIDAS là một thương hiệu lớn"
      },
      {
        name: "Nike",
        description: "NIKE là một thương hiệu lớn"
      },
      {
        name: "Converse",
        description: "CONVERSE là một thương hiệu lớn"
      },
      {
        name: "New Balance",
        description: "NEW BALANCE là một thương hiệu lớn"
      }
    ];
    data.map(items => {
      items.createdAt = Sequelize.literal("NOW()");
      items.updatedAt = Sequelize.literal("NOW()");
      return items;
    });

    return queryInterface.bulkInsert("Brands", data, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Brands", null, {});
  }
};
