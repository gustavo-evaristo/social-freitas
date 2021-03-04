const comment = require('../models/comments')

module.exports = {

  async create(req, res) {

    const { description, id_post } = req.body

    const { id } = req.session.user

    if (description.length < 1 || id_post == null || id_post == undefined || id == null || id == undefined) {

      return res.redirect(`/post/${id_post}`)

    }

    const comments = await comment.create({

      description,
      id_user: id,
      id_post

    })

    return res.redirect(`/post/${id_post}`)

  }

}