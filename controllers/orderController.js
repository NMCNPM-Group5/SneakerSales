let controller = {};
let models = require("../models");
let Order = models.Order;

controller.createOrder = order => {
  return Order.create(order);
};

controller.getAll = () => {
  return new Promise((resolve, reject) => {
    Order.findAll()
      .then(data => resolve(data))
      .catch(error => reject(new Error(error)));
  });
};

controller.getById = id => {
  return new Promise((resolve, reject) => {
    Order.findOne({
      where: { id: id }
    })
      .then(data => resolve(data))
      .catch(error => reject(new Error(error)));
  });
};
module.exports = controller;
