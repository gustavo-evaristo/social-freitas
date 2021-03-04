const Sequelize = require('sequelize')

const connection = require('../config/connection')

const sector = connection.define('sector', {
  name: Sequelize.STRING(255)
})

//sector.sync({ force: true })

module.exports = sector