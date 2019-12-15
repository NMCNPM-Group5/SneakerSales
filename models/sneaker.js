"use strict";
module.exports = (sequelize, DataTypes) => {
  const Sneaker = sequelize.define(
    "Sneaker",
    {
      sneakerID: DataTypes.STRING,
      name: DataTypes.STRING,
      brandName: DataTypes.STRING,
      sizeID: DataTypes.INTEGER,
      imgPath: DataTypes.STRING,
      subImgPath: DataTypes.STRING,
      description: DataTypes.STRING,
      status: DataTypes.STRING,
      price: DataTypes.INTEGER,
      color: DataTypes.STRING,
      gender: DataTypes.STRING
    },
    {}
  );
  Sneaker.associate = function(models) {
    // associations can be defined here
    Sneaker.belongsTo(models.Size, { foreignKey: "sizeID" });
    //Sneaker.belongsTo(models.Brand, { foreignKey: "brandName" });
  };
  return Sneaker;
};
