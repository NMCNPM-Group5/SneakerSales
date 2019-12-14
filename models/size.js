"use strict";
module.exports = (sequelize, DataTypes) => {
  const Size = sequelize.define(
    "Size",
    {
      size35: DataTypes.INTEGER,
      size36: DataTypes.INTEGER,
      size37: DataTypes.INTEGER,
      size38: DataTypes.INTEGER,
      size39: DataTypes.INTEGER,
      size40: DataTypes.INTEGER,
      size41: DataTypes.INTEGER,
      size42: DataTypes.INTEGER,
      size43: DataTypes.INTEGER,
      size44: DataTypes.INTEGER,
      total: DataTypes.INTEGER,
      sold: DataTypes.INTEGER
    },
    {}
  );
  Size.associate = function(models) {
    // associations can be defined here
  };
  return Size;
};
