const Sequelize = require('sequelize')

const connection = require('../config/connection')

const sector = require('./sector')

const user = connection.define('user', {
  
  name: {
    type: Sequelize.STRING(255),
    allowNull: false
  },

  login: {
    type: Sequelize.STRING(255),
    allowNull: false,
    unique: true
  },

  password: {
    type: Sequelize.STRING(255),
    allowNull: false
  },

  privilege: {
    type: Sequelize.STRING(255),
    allowNull: false
  },

  genre: {
    type: Sequelize.STRING(255),
    allowNull: false
  },

  status: {
    type: Sequelize.INTEGER,
    default: 1
  },

  background: Sequelize.STRING(255),

  id_sector: {
    type: Sequelize.INTEGER,
    allowNull: true,

    reference: {
      model: sector,
      key: 'id'
    }
  }

})

user.belongsTo(sector,{ foreignKey: 'id_sector' })
sector.hasMany(user, { foreignKey: 'id_sector' })


//user.sync({ force: true })

module.exports = user