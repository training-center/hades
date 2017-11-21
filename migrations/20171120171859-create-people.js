'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Person', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      //foreign key usage
      //level_id: {
      //  type: Sequelize.INTEGER,
      //  references: {
      //    model: 'another_table_name',
      //    key: 'id'
      //  },
      //  onUpdate: 'cascade',
      //  onDelete: 'cascade'
      //},
      //area_id: {
      //  type: Sequelize.INTEGER,
      //  references: {
      //    model: 'another_table_name',
      //    key: 'id'
      //  },
      //  onUpdate: 'cascade',
      //  onDelete: 'cascade'
      //},
      //profile_id: {
      //  type: Sequelize.INTEGER,
      //  references: {
      //    model: 'another_table_name',
      //    key: 'id'
      //  },
      //  onUpdate: 'cascade',
      //  onDelete: 'cascade'
      //},
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      //status: {
      //  type: Sequelize.INTEGER,
      //  references: {
      //    model: 'another_table_name',
      //    key: 'id'
      //  },
      //  onUpdate: 'cascade',
      //  onDelete: 'cascade'
      //},
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
    return queryInterface.dropTable('Person')
  }
}
