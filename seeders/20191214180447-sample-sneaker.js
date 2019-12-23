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
        let data = [{
                sneakerID: "ADIDAS-01",
                name: "Sneaker Sample 01",
                brandName: "Adidas",
                sizeID: "1",
                price: 500000,
                imgPath: "adidas-01.jpg",
                subImgPath: "adidas-01-sub.jpg",
                description: "",
                status: "inStock",
                color: "black",
                gender: "male"
            },
            {
                sneakerID: "ADIDAS-02",
                name: "Sneaker Sample 02",
                brandName: "Adidas",
                sizeID: "2",
                price: 500000,
                imgPath: "adidas-02.jpg",
                subImgPath: "adidas-02-sub.jpg",
                description: "",
                status: "inStock",
                color: "black",
                gender: "male"
            },
            {
                sneakerID: "NIKE01",
                name: "Sneaker Sample 03",
                brandName: "Nike",
                sizeID: "3",
                price: 500000,
                imgPath: "adidas-01.jpg",
                subImgPath: "adidas-01-sub.jpg",
                description: "",
                status: "inStock",
                color: "black",
                gender: "male"
            },
            {
                sneakerID: "ADIDAS-01",
                name: "Sneaker Sample 01",
                brandName: "Adidas",
                sizeID: "4",
                price: 500000,
                imgPath: "adidas-01.jpg",
                subImgPath: "adidas-01-sub.jpg",
                description: "",
                status: "inStock",
                color: "black",
                gender: "male"
            },
            {
                sneakerID: "ADIDAS-01",
                name: "Sneaker Sample 01",
                brandName: "Adidas",
                sizeID: "1",
                price: 500000,
                imgPath: "adidas-01.jpg",
                subImgPath: "adidas-01-sub.jpg",
                description: "",
                status: "inStock",
                color: "black",
                gender: "male"
            }
        ];
        data.map(items => {
            items.createdAt = Sequelize.literal("NOW()");
            items.updatedAt = Sequelize.literal("NOW()");
            return items;
        });

        return queryInterface.bulkInsert("Sneakers", data, {});
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('People', null, {});
        */
        return queryInterface.bulkDelete("SneakerSales", null, {});
    }
};