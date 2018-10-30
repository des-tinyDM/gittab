const { User } = require('../../models')

module.exports = {
  async register (req, res) {
    // const { email, password } = req.body
    try {
      const user = await User.create(req.body)
      res.status(201).send(user.toJSON())
    } catch (err) {
      res.status(400).send({ error: 'This email is already in use.' })
    }
  }
}
