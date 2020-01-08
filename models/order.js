"use strict";
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      product: DataTypes.STRING,
      price: DataTypes.INTEGER,
      guestName: DataTypes.STRING,
      guestPhone: DataTypes.STRING,
      guestAddress: DataTypes.STRING,
      guestCity: DataTypes.STRING,
      guestEmail: DataTypes.STRING,
      isCOD: DataTypes.BOOLEAN,
      note: DataTypes.STRING,
      status: DataTypes.STRING
    },
    {}
  );
  Order.associate = function(models) {
    // associations can be defined here
    Order.belongsTo(models.User);
  };
  return Order;
};
