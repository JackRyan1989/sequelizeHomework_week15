'use strict';
module.exports = (sequelize, DataTypes) => {
  const burgers = sequelize.define('burgers', {
    burgerName:{type: DataTypes.STRING, allowNull: false, validate: {
      len: [1, 50]
    }
  } ,
    eaten: {type: DataTypes.BOOLEAN, defaultValue: false}
  });
  return burgers;
};