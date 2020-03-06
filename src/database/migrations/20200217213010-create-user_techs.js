'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('user_techs', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'usuarios', key: 'id' },
          OnUpdate: 'CASCADE',
          OnDelete: 'CASCADE',
        },
        tech_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'techs', key: 'id' },
          OnUpdate: 'CASCADE',
          OnDelete: 'CASCADE',
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },  
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('user_techs');
  }
};
