'use strict';
module.exports = (sequelize, DataTypes) => {
  const kmb = sequelize.define('kmb', {
    路線所屬公司: DataTypes.STRING,
    路線: DataTypes.STRING,
    起點: DataTypes.STRING,
    方向: DataTypes.STRING,
    目的地: DataTypes.STRING,
    完成挑戰: DataTypes.STRING,
    開始時間: DataTypes.STRING,
    結束時間: DataTypes.STRING,
    總行程時間: DataTypes.STRING,
    Instagram記錄連結: DataTypes.STRING,
    備註: DataTypes.STRING,
    可挑戰: DataTypes.STRING,
    聯營: DataTypes.STRING,
  }, {
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });
  kmb.associate = function(models) {
    // associations can be defined here
  };
  return kmb;
};