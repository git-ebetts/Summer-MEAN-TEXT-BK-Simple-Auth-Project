var mongoose = require('mongoose')
mongoose.connect('mongodb://locahost/auth_demo')

var user = mongoose.Schema({
  username: {type: String},
  password: {type: String, select: false}
})

module.exports = mongoose.model('User', user)