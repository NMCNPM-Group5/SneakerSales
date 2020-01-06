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
        fullname: "test",
        username: "test@gmail.com",
        password: ""
      },
      {
        fullname: "test2",
        username: "test2@gmail.com",
        password: "$2a$10$.awhk3N2XApgWrq/R2dexej1XM3737nnQ/yM.S56KiY4R7iMVW2hG"
      }
    ];
    data.map(items => {
      items.createdAt = Sequelize.literal("NOW()");
      items.updatedAt = Sequelize.literal("NOW()");
      return items;
    });
    return queryInterface.bulkInsert("Users", data, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Users", null, {});
  }
};
