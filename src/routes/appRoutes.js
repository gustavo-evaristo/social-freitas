const express = require('express')

const routes = express.Router()

//? --------------Login e cadastro --------------//

const appController = require('../controllers/appController')

routes.get('/cadastro', appController.sign)
routes.post('/cadastro', appController.createAccount)

routes.get('/login', appController.login)
routes.post('/login', appController.accesAccount)

routes.get('/sair', appController.logout)

module.exports = routes