const Sequelize = require('sequelize')

const connection = new Sequelize('social_freitas', 'admin', 'Freitas@2020', {
  host: '172.15.0.8',
  dialect: 'mysql',
  timezone: '-03:00',
  logging: false
})

module.exports = connection