const user = require('../models/user')

const post = require('../models/post')

const { Op } = require('sequelize')

const bcrypt = require('bcrypt')

module.exports = {

  async show(req, res){

    let User = await user.findByPk(req.session.user.id)

    let relatedUsers = await user.findAll({

      where: { 

        id_sector: req.session.user.id_sector, 
      
        status: 1
        
      },

      [Op.ne]: [{ id: req.session.user.id }],

      order: [[ 'createdAt', 'DESC' ]],

      limit: 4

    })

    let posts = await post.findAll({

      where: { id_user: req.session.user.id },

      include: { model: user },

      order: [['createdAt', 'DESC']]
      
    })

    return res.render('profile', { User, relatedUsers, posts })
  },

  async profileByLogin(req, res){

    const User = await user.findByPk(req.session.user.id)

    const relatedUsers = await user.findAll({

      where: { 

        id_sector:  req.session.user.id_sector, 
      
        status: 1
      
      },

      order: [['createdAt', 'DESC']],

      limit: 4

    })

    const userByProfile = await user.findOne({

      where: { login: req.params.login }

    })
    
    const posts = await post.findAll({

      include: { model: user },

      where: { id_user: userByProfile.id },

      order: [['createdAt', 'DESC']],

    })

    if (req.session.user.id_sector == userByProfile.id_sector || req.session.user.id_sector == '4'){

      return res.render('profileByLogin', { User, relatedUsers, userByProfile, posts })

    } else {

      return res.redirect('/')

    }
  },

  async update(req, res) {

    let { name, login, password, activePassword } = req.body

    let { id } = req.session.user

    if(password[0] != password[1]) {
      return res.redirect('/perfil')
    }

    let verifyUser = await user.findByPk(id) 
    
    const comparePassword = bcrypt.compareSync(activePassword, verifyUser.password)

    if (comparePassword){

      const salt = await bcrypt.genSalt(10)

      password = await bcrypt.hash(password[0], salt)

      let verifyUserLogin = await user.findOne({
        where: { login }
      })

      if (verifyUserLogin){

        if (verifyUserLogin.id == id){
          await user.update({ name, login, password }, { where: { id } })
  
        } else {
          console.log('------------------------ LOGIN JÁ EXISTE ------------------------------')
        }

      } else {

        await user.update({ name, login, password }, { where: { id } })

      }
    }

    return res.redirect('/perfil')

  },

  async background (req, res){

    const { background } = req.body

    const { id } = req.session.user

    if (background.length < 1 || background == '') {

      return res.redirect('/perfil')
    
    } else {

      await user.update({ background }, { where: { id } })
  
    }

    return res.redirect('/perfil')
  }

}