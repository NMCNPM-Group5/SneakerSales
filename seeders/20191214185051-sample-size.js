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
        size35: 10,
        size36: 5,
        size37: 8,
        size38: 8,
        size39: 8,
        size40: 8,
        size41: 8,
        size42: 8,
        size43: 8,
        size44: 8,
        total: 50,
        sold: 10
      },
      {
        size35: 10,
        size36: 5,
        size37: 8,
        size38: 8,
        size39: 8,
        size40: 8,
        size41: 8,
        size42: 8,
        size43: 8,
        size44: 8,
        total: 50,
        sold: 10
      },
      {
        size35: 10,
        size36: 5,
        size37: 8,
        size38: 8,
        size39: 8,
        size40: 8,
        size41: 8,
        size42: 8,
        size43: 8,
        size44: 8,
        total: 50,
        sold: 10
      },
      {
        size35: 10,
        size36: 5,
        size37: 8,
        size38: 8,
        size39: 8,
        size40: 8,
        size41: 8,
        size42: 8,
        size43: 8,
        size44: 8,
        total: 50,
        sold: 10
      },
      {
        size35: 10,
        size36: 5,
        size37: 8,
        size38: 8,
        size39: 8,
        size40: 8,
        size41: 8,
        size42: 8,
        size43: 8,
        size44: 8,
        total: 50,
        sold: 10
      },
      {
        size35: 10,
        size36: 5,
        size37: 8,
        size38: 8,
        size39: 8,
        size40: 8,
        size41: 8,
        size42: 8,
        size43: 8,
        size44: 8,
        total: 50,
        sold: 10
      },
      {
        size35: 10,
        size36: 5,
        size37: 8,
        size38: 8,
        size39: 8,
        size40: 8,
        size41: 8,
        size42: 8,
        size43: 8,
        size44: 8,
        total: 50,
        sold: 10
      },
      {
        size35: 10,
        size36: 5,
        size37: 8,
        size38: 8,
        size39: 8,
        size40: 8,
        size41: 8,
        size42: 8,
        size43: 8,
        size44: 8,
        total: 50,
        sold: 10
      },
      {
        size35: 10,
        size36: 5,
        size37: 8,
        size38: 8,
        size39: 8,
        size40: 8,
        size41: 8,
        size42: 8,
        size43: 8,
        size44: 8,
        total: 50,
        sold: 10
      }
    ];
    data.map(items => {
      items.createdAt = Sequelize.literal("NOW()");
      items.updatedAt = Sequelize.literal("NOW()");
      return items;
    });

    return queryInterface.bulkInsert("Sizes", data, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Sizes", null, {});
  }
};
