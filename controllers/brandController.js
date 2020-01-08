let controller = {};
let models = require("../models");
let brand = models.Brand;

controller.getAll = () => {
  return new Promise((resolve, reject) => {
    brand
      .findAll()
      .then(data => resolve(data))
      .catch(error => reject(new Error(error)));
  });
};

module.exports = controller;
