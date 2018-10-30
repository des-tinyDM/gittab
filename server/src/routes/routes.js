const AuthController = require('./controllers/authController')
const AuthenticationPolicy = require('../policies/AuthenticationPolicy')

module.exports = (app) => {
  app.post('/register', AuthenticationPolicy.register, AuthController.register)
}
