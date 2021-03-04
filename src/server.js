const express = require('express')

const app = express()

const server = require('http').createServer(app)

const io = require('socket.io')(server)

const path = require('path')

const connection = require('./config/connection')

const bodyParser = require('body-parser')

const session = require('express-session')

const moment = require('moment')


//Testando conexão com o banco de dados
const authentication = async () => {
  try {
    await connection.authenticate()
    return console.log('Banco de dados conectado')

  } catch(err) {
    return console.log('Erro ao se conectar com o banco de dados', err)  
  }
} 
authentication()

//Socket IO 
app.use((req, res, next) => {
  req.io = io

  next()
})

//Enviando o moment para formatar as datas
app.use((req, res, next) => {
  res.locals.moment = moment

  next() 
})

//Recebedo json das rotas
app.use(bodyParser.urlencoded({ extended: true }))

//Template engine
app.set('view engine', 'ejs')

//Arquivos estaticos
app.use(express.static(path.resolve(__dirname, '..', 'public')))
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'public', 'uploads')))

//Sessões
app.use(session({
  secret: 'JfQNnVyoZnXtPMhCxebHXAPcRkhOkwFh',
  saveUninitialized: true,
  resave: true
}))

//Rotas
app.use('/', require('./routes/appRoutes'), require('./routes/userRoutes'))
app.use('*', require('./routes/errorRoutes'))

//Porta que o servidor irá ser executado
server.listen(3000)