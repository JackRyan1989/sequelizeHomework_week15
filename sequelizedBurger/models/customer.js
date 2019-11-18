'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    name: {type: DataTypes.STRING, allowNull: false, validate: {
      len: [1, 50]
    }}
  });
  Customer.associate = function(models) {
      Customer.hasMany(models.Burgers, {
        onDelete: "cascade"
      });
  };
  return Customer;
};