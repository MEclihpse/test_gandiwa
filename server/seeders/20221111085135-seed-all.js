'use strict';

const { hashPass } = require('../helpers');

hashPass
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Users',[{
      name: 'admin',
      email: 'admin@voltest.com',
      password: hashPass('admin'),
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
     }], {})
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User', null, {});
  }
};
