let controller = {};
let models = require("../models");
let sneaker = models.Sneaker;
let brand = models.Brand;

controller.getAll = () => {
  return new Promise((resolve, reject) => {
    sneaker
      .findAll({
        attributes: [
          "id",
          "sneakerID",
          "name",
          "brandName",
          "price",
          "sizeID",
          "imgPath",
          "subImgPath",
          "description",
          "status",
          "color",
          "gender"
        ]
      })
      .then(data => resolve(data))
      .catch(error => reject(new Error(error)));
  });
};

module.exports = controller;
