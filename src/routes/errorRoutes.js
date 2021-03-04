const express = require('express')

const routes = express.Router()

const errorController = require('../controllers/errorController')

routes.get('*', errorController.error)

module.exports = routes