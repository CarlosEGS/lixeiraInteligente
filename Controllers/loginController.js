var User = require('../Models/userModel');

/* istanbul ignore next */
exports.CreateAccount = function (req, res) {
  try {
    var Usuario = new User();
      Usuario.email = req.body.email,
      Usuario.senha = req.body.senha,
      Usuario.senhaConfirmacao = req.body.senhaConfirmacao

    if (Usuario.senha != Usuario.senhaConfirmacao) {
      return res.status(400).json({
        message: 'Senhas Diferentes.'
      })
    }
    if (Usuario.senha == "" || Usuario.senhaConfirmacao == "" || Usuario.email == "") {
      return res.status(400).json({
        message: 'Informe todos os dados.'
      })
    }
    Usuario.save();
    return res.status(201).json({
      message: 'Usuário Criado.'
    })
  } catch (error) {
    return res.status(500).json({
      error
    })
  }
}

/* istanbul ignore next */
exports.Login = function (req, res) {
    try {
      var email = req.body.email;
      var senha = req.body.senha;
      if (email == "" ||senha == "") {
        return res.status(400).json({
          message: 'Informe todos os dados.'
        })
      }
      User.findOne({email: email, senha: senha}).then(function(user){
        if (user == null) {
          return res.status(404).json({
            message: "Usuário não encontrado."
          })
        }
        return res.status(200).json({
          user
        })
      })
    } catch (error) {
      return res.status(500).json({
        error
      })
    }
    
}