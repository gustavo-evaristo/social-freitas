const express = require('express')

const routes = express.Router()

const multer = require('multer')

const multerConfig = require('../config/multerConfig')

const upload = multer(multerConfig)

const userAuth = require('../middlewares/auth').userAuth

//? --------------Postagens---------------//

const postController = require('../controllers/postController')

routes.get('/', userAuth, postController.show)
routes.post('/post-create', userAuth, upload.single('image'), postController.create)
routes.get('/post/:id', userAuth, postController.postById)

//? --------------Comentarios---------------//

const commentsController = require('../controllers/commentsController')

routes.post('/comentario', userAuth, commentsController.create)

//? --------------Listagem de Usuarios---------------//

const userController = require('../controllers/usersController')

routes.get('/usuarios', userAuth, userController.show)

//? --------------Perfil---------------//

const profileController = require('../controllers/profileController')

routes.get('/perfil', userAuth, profileController.show)
routes.get('/perfil/:login', userAuth, profileController.profileByLogin)
routes.post('/editar-perfil', userAuth, profileController.update)
routes.post('/background', userAuth, profileController.background)

//? --------------Explorar---------------//

const exploreController = require('../controllers/exploreController')

routes.get('/explorar', userAuth, exploreController.show)

//? --------------Favoritos---------------//

const favoritesController = require('../controllers/favoritesController')

routes.get('/favoritos', userAuth, favoritesController.show)
routes.post('/remover-favoritos', userAuth, favoritesController.delete)
routes.post('/favoritos', userAuth, favoritesController.create)


module.exports = routes