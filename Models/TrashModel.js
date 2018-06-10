var mongoose = require('mongoose'); 
var User = require('../Models/userModel');

var TrashModel = mongoose.model('Trash', {
   Nome: {type: String, required: true},
   Descricao: {type: String, required: true},
   idAccount: {type: String, required: true},
   User: {type: String, required: true},
   Local: {type: String, required: true}
});

module.exports = (TrashModel)