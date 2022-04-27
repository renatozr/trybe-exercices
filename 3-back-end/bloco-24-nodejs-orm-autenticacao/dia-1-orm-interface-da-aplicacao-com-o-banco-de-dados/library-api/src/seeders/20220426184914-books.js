'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'a',
        author: 'aa',
        page_quantity: 1,
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        created_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        title: 'b',
        author: 'bb',
        page_quantity: 2,
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        created_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        title: 'c',
        author: 'cc',
        page_quantity: 3,
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        created_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null);
  }
};
