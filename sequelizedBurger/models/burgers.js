'use strict';
module.exports = (sequelize, DataTypes) => {
  const Burgers = sequelize.define('Burgers', {
    burgerName: {type: DataTypes.STRING, allowNull: false, validate: {
      len: [1, 50]
    }
  },
    eaten: {type: DataTypes.BOOLEAN, defaultValue: false}
  });
  return Burgers;
};