require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

const mongoose = require('mongoose')

const bodyParser = require('body-parser')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')

const authRouter = require('./routes/auth')
const userRouter = require('./routes/users')
const postsRouter = require('./routes/posts')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())

app.use((req, res, next)=>{
  res.header("Access-Control-Allow-Origin", process.env.FRONT_END_URL)
  res.header("Access-Control-Allow-Methods", "OPTIONS,GET,PUT,PATCH,POST,DELETE")
  res.header("Access-Control-Allow-Headers", 
              "X-PINGOTHER, Content-Type, Authorization")
  app.use(cors())
  next()
})

mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true }, function (err) { 
  if (err) throw err; console.log('Conectado ao Mongo'); });

app.use(morgan('common'))
app.use(helmet())

app.use('/auth', authRouter)
app.use('/users', userRouter)
app.use('/posts', postsRouter)

app.listen(PORT, ()=>{
    console.log(`Aplicativo rodando em: http://localhost:${PORT}`)
})