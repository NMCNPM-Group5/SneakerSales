let controller = {};
let models = require("../models");
let sneaker = models.Sneaker;

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

controller.getById = function(id) {
    return new Promise((resolve, reject) => {
        sneaker
            .findOne({
                where: { id: id },
                include: [{ model: models.Size }]
            })
            .then(result => resolve(result))
            .catch(error => reject(new Error(error)));
    })
};

controller.getByBrand = function(brandName) {
    return new Promise((resolve, reject) => {
        sneaker
            .findAll({
                where: { brandName: brandName },
                limit: 3
            })
            .then(result => resolve(result))
            .catch(error => reject(new Error(error)));
    })
};

module.exports = controller;