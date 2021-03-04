const Sequelize = require('sequelize')

const connection = require('../config/connection')

const sector = require('./sector')

const user = require('./user')

const post = connection.define('post', {
  
  description: {
    type: Sequelize.STRING(5000),
    allowNull: false
  },

  image: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },

  privacy: {
    type: Sequelize.STRING(255),
    allowNull: false
  },

  status: {
    type: Sequelize.INTEGER,
    default: 1
  },

  id_sector: {
    type: Sequelize.INTEGER,
    allowNull: false,

    reference: {
      model: sector,
      key: 'id'
    }
  },

  id_user: {
    type: Sequelize.INTEGER,
    allowNull: false,

    reference: {
      model: user,
      key: 'id'
    }
  }

})

post.belongsTo(sector,{ foreignKey: 'id_sector'})
post.belongsTo(user,{ foreignKey: 'id_user'})

sector.hasMany(post, { foreignKey: 'id_sector' })
user.hasMany(post, { foreignKey: 'id_user' })


//post.sync({ force: true })

module.exports = post