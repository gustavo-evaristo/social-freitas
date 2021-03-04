const posts = require('../models/post')

const user = require('../models/user')

module.exports = {

  async show(req, res) {

    const post = await posts.findAll({

      where: { 
        
        privacy: 'public',

        status: 1
    
    },

      include: { model: user },

      order: [[ 'createdAt', 'DESC' ]]

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

    return res.render('explore', { post, User, relatedUsers })
  }

}