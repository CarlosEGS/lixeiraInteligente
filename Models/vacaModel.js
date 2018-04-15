var mongoose = require('mongoose'); 

var VacaModel = mongoose.model('Vaca', {
   nome: {type: String, required: true},
   leite: {type: String, required: true},
   racao: {type: String, required: true}
});

module.exports = (VacaModel)