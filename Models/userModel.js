var mongoose = require('mongoose'); 

var UserModel = mongoose.model('User', {
   email: {type: String, required: true},
   senha: {type: String, required: true},
   senhaConfirmacao: {type: String, required: true}
});

module.exports = (UserModel)