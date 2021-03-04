const Sequelize = require('sequelize')

const connection = require('../config/connection')

const user = require('./user')

const post = require('./post')

const comment = connection.define('comment', {
  
  description: {
    type: Sequelize.STRING(5000),
    allowNull: false
  },

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
  }

})

comment.belongsTo(user,{ foreignKey: 'id_user'})
comment.belongsTo(post,{ foreignKey: 'id_post'})

user.hasMany(comment, { foreignKey: 'id_user' })
post.hasMany(comment, { foreignKey: 'id_post' })


//comment.sync({ force: true })

module.exports = comment