'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'a',
        author: 'aa',
        pageQuantity: 1,
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        title: 'b',
        author: 'bb',
        pageQuantity: 2,
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        title: 'c',
        author: 'cc',
        pageQuantity: 3,
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null);
  }
};
