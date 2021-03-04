const user = require('../models/user')


const bcrypt = require('bcrypt')

module.exports = {

  async sign(req, res) {
    return await res.render('signin.ejs')
  },

  async createAccount(req, res) {
    try {
      let { name, login, password, privilege = 'user', genre, id_sector } = req.body

      if (password[0] === password[1]) {
        password = password[0]

        let salt = bcrypt.genSaltSync(10)

        password = bcrypt.hashSync(password, salt)

      } else {
        return res.redirect('/cadastro')
      }

      const verifyUser = await user.findOne({
        where: { login }
      })

      if (verifyUser) {
        return res.redirect('cadastro')

      } else {
        const newUser = await user.create({
          name,
          login,
          password,
          privilege,
          genre,
          id_sector
        })

        return res.redirect('/login')

      }

    } catch (err) {
      return console.error(err)
    }
  },

  async login(req, res) {
    return await res.render('login')
  },

  async accesAccount(req, res) {
    const { login, password } = req.body

    try {
      const User = await user.findOne({
        where: { login }
      })

      if (User) {
        let correct = bcrypt.compareSync(password, User.password)

        if (correct) {

          req.session.user = {
            id: User.id,
            name: User.name,
            login: User.login,
            privilege: User.privilege,
            genre: User.genre,
            id_sector: User.id_sector,
            creation: User.createdAt
          }

          return res.redirect('/')

        } else {
          res.redirect('/login')
        }

      } else {
        res.redirect('/login')
      }

    } catch (err) {
      res.redirect('/login')
      return console.error(err)
    }

  },


  async logout(req, res) {
    
    req.session.user = null

    return res.redirect('/')
  }
}