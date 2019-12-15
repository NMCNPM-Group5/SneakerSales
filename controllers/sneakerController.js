let controller = {};
let models = require("../models");
let sneaker = models.Sneaker;
let size = models.Size;
let Sequelize = require("sequelize");
let Op = Sequelize.Op;
controller.getAll = query => {
  return new Promise((resolve, reject) => {
    let options = {
      //include: [{ model: models.Brand }],
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
      ],
      include: [],
      where: {}
    };

    if (query.brand) {
      options.where.brandName = query.brand;
    }
    if (query.gender) {
      options.where.gender = query.gender;
    }
    if (query.color) {
      options.where.color = query.color;
    }
    if (query.size) {
      console.log(query.size);

      if (query.size == 35) {
        options.include.push({
          model: models.Size,
          attributes: ["id"],
          where: { size35: { [Op.gt]: 0 } }
        });
      } else if (query.size == 36) {
        options.include.push({
          model: models.Size,
          attributes: ["id"],
          where: { size36: { [Op.gt]: 0 } }
        });
      } else if (query.size == 37) {
        options.include.push({
          model: models.Size,
          attributes: ["id"],
          where: { size37: { [Op.gt]: 0 } }
        });
      } else if (query.size == 38) {
        options.include.push({
          model: models.Size,
          attributes: ["id"],
          where: { size38: { [Op.gt]: 0 } }
        });
      } else if (query.size == 39) {
        options.include.push({
          model: models.Size,
          attributes: ["id"],
          where: { size39: { [Op.gt]: 0 } }
        });
      } else if (query.size == 40) {
        options.include.push({
          model: models.Size,
          attributes: ["id"],
          where: { size40: { [Op.gt]: 0 } }
        });
      } else if (query.size == 41) {
        options.include.push({
          model: models.Size,
          attributes: ["id"],
          where: { size41: { [Op.gt]: 0 } }
        });
      } else if (query.size == 42) {
        options.include.push({
          model: models.Size,
          attributes: ["id"],
          where: { size42: { [Op.gt]: 0 } }
        });
      } else if (query.size == 43) {
        options.include.push({
          model: models.Size,
          attributes: ["id"],
          where: { size43: { [Op.gt]: 0 } }
        });
      } else if (query.size == 44) {
        options.include.push({
          model: models.Size,
          attributes: ["id"],
          where: { size44: { [Op.gt]: 0 } }
        });
      }
    }
    //}
    sneaker
      .findAll(options)
      .then(data => resolve(data))
      .catch(error => reject(new Error(error)));
  });
};

module.exports = controller;
