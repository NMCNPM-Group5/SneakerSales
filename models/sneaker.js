'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sneaker = sequelize.define('Sneaker', {
    sneakerID: DataTypes.STRING,
    name: DataTypes.STRING,
    brandName: DataTypes.STRING,
    sizeID: DataTypes.STRING,
    imgPath: DataTypes.STRING,
    subImgPath: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  Sneaker.associate = function(models) {
    // associations can be defined here
  };
  return Sneaker;
};