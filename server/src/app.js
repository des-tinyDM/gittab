const express = require('express')
const { json } = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')
const app = express()
app.use(morgan('combined'))
app.use(json())
app.use(cors())

require('./routes/routes')(app)

sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })
