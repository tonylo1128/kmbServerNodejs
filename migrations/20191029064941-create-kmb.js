'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('kmbs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      路線所屬巴士公司: {
        type: Sequelize.STRING
      },
      定位: {
        type: Sequelize.STRING
      },
      路線: {
        type: Sequelize.STRING
      },
      起點: {
        type: Sequelize.STRING
      },
      目的地: {
        type: Sequelize.STRING
      },
      完成: {
        type: Sequelize.STRING
      },
      開始時間: {
        type: Sequelize.STRING
      },
      結束時間: {
        type: Sequelize.STRING
      },
      總行程時間: {
        type: Sequelize.STRING
      },
      Instagram記錄連結: {
        type: Sequelize.STRING
      },
      備註: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('kmbs');
  }
};