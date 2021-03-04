const post = require('../models/post')

const user = require('../models/user')

const comment = require('../models/comments')

const { Op } = require('sequelize')

module.exports = {

  async create(req, res) {
    req.body.id_user = req.session.user.id
    req.body.id_sector = req.session.user.id_sector

    if (req.body.privacy === undefined) {
      req.body.privacy = 'private'

    } else {
      req.body.privacy = 'public'

    }

    let { description, privacy, id_sector, id_user } = req.body

    let { filename: image } = req.file

    const newPost = await post.create({
      description,
      image,
      privacy,
      id_sector,
      id_user
    })

    req.io.emit('newPost', newPost)

    return res.redirect('/')
  },

  async show(req, res) {

    const posts = await post.findAll({

      where: {
        status: 1,

        id_sector: {
          [Op.or]: [req.session.user.id_sector, 4],
        }
      },

      include: { model: user },

      order: [['createdAt', 'DESC']]

    })

    const User = await user.findByPk(req.session.user.id)

    const relatedUsers = await user.findAll({

      where: { 

        id_sector: req.session.user.id_sector,

        status: 1
        
       },

      order: [['createdAt', 'DESC']],

      limit: 4

    })

    return res.render('index', { posts, User, relatedUsers })
  },

  async postById(req, res) {

    const postById = await post.findByPk(req.params.id, {

      include: { model: user }

    })

    const User = await user.findByPk(req.session.user.id)

    const posts = await post.findAll({

      where: { id_user: postById.user.id },

      order: [['createdAt', 'DESC']]

    })

    const comments = await comment.findAll({

      where: { id_post: postById.id },

      include: { model: user },

      order: [['createdAt', 'DESC']]

    })

    return res.render('postById', { postById, User, posts, comments })

  }

}