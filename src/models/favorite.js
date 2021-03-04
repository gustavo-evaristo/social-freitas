const Sequelize = require('sequelize')

const connection = require('../config/connection')

const user = require('./user')

const post = require('./post')

const favorite = connection.define('favorite', {

  id_user: {
    type: Sequelize.INTEGER,
    allowNull: false,

    reference: {
      model: user,
      key: 'id'
    }
  },

  id_post: {
    type: Sequelize.INTEGER,
    allowNull: false,

    reference: {
      model: post,
      key: 'id'
    }
  },

  author: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  login: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  post_genre: {
    type: Sequelize.STRING,
    allowNull: false,
  }

})

favorite.belongsTo(post,{ foreignKey: 'id_post'})
favorite.belongsTo(user,{ foreignKey: 'id_user'})

post.hasMany(favorite, { foreignKey: 'id_post' })
user.hasMany(favorite, { foreignKey: 'id_user' })


// favorite.sync({ force: true })

module.exports = favorite