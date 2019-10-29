'use strict';
module.exports = (sequelize, DataTypes) => {
  const kmb = sequelize.define('kmb', {
    路線所屬巴士公司: DataTypes.STRING,
    定位: DataTypes.STRING,
    路線: DataTypes.STRING,
    起點: DataTypes.STRING,
    目的地: DataTypes.STRING,
    完成: DataTypes.STRING,
    開始時間: DataTypes.STRING,
    結束時間: DataTypes.STRING,
    總行程時間: DataTypes.STRING,
    Instagram記錄連結: DataTypes.STRING,
    備註: DataTypes.STRING
  }, {});
  kmb.associate = function(models) {
    // associations can be defined here
  };
  return kmb;
};