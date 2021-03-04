const users = require('../models/user')

const { Op } = require('sequelize')

module.exports = {
  async show(req, res){
  
    let user = await users.findAll({
      where: {
        [Op.and]: [
          { id_sector: req.session.user.id_sector },
          { status: 1 }
        ]
      }
    })

    let User = await users.findByPk(req.session.user.id)

    return res.render('users', { user, User })

  }
}