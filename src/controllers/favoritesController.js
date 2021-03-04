const favorite = require('../models/favorite')

const post = require('../models/post')

const user = require('../models/user')

const { Op } = require('sequelize')

module.exports = {

  async create(req, res){

    const id_user = req.session.user.id
    
    const { id_post, author, login, post_genre } = req.body

    const verifyFavorites = await favorite.findOne({
    
      where: { 

        [Op.and]: [
          { id_user },
          { id_post }
        ]
      }

    })

    if (verifyFavorites){
      return res.redirect('/')
    } else {

    const create = await favorite.create({
      id_user,
      id_post,
      author,
      login,
      post_genre
    })

    return res.redirect('/favoritos')

    }
    
  },

  async show(req, res){

    const { id: id_user, id_sector } = req.session.user
    

    const favorites = await favorite.findAll({

      where: { id_user },

      include: { model: post },

      order: [['createdAt', 'DESC']]

    })

    const User = await user.findByPk(id_user)

    const relatedUsers = await user.findAll({
      
      where: { 

        id_sector,
        
        status: 1
        
      },

      order: [['createdAt', 'DESC']],

      limit: 4

    })

    return res.render('favorites', { favorites, User, relatedUsers })
  },

  async delete(req, res){

    const { id } = req.body

  try {

    await favorite.destroy({
      where: { id }
    })

  } catch (err){

    return console.log(err)

  }

    return res.redirect('/favoritos')
    
  }

}