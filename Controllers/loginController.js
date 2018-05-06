var User = require('../Models/userModel');
var bcrypt = require('bcrypt');

exports.CreateAccount = function (req, res) {
  try {

      var Usuario = new User();
      Usuario.email = req.body.email;
      Usuario.senha = req.body.senha;
      Usuario.idAccount = Usuario._id;
      var senhaConfirmacao = req.body.senhaConfirmacao

    if (Usuario.senha != senhaConfirmacao) {
      console.log('Senhas Diferentes.');
      return res.status(400).json({
        message: 'Senhas Diferentes.'
      })
    }

    User.findOne({email: Usuario.email}).then(function(user){
      if (user == null) {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(Usuario.senha, salt);
        Usuario.senha = hash;
        Usuario.save();
        console.log('Usuário Criado.');
        return res.status(201).json({
          message: 'Usuário Criado.'
        })
      }
      console.log('Usuário Já Existente.');
      return res.status(400).json({
        message: 'Usuário Já Existente.'
      })
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error
    })
  }
}


exports.Login = function (req, res) {
    try {

      var email = req.body.email;
      var senha = req.body.senha;
      if (email == '' ||senha == '') {
        console.log('Informe todos os dados.');
        return res.status(400).json({
          message: 'Informe todos os dados.'
        })
      }
      User.findOne({email: email}).then(function(user){
        if (user == null) {
          console.log('Usuário não encontrado.');
          return res.status(404).json({
            message: 'Usuário não encontrado.'
          })
        }
        console.log('plana: ' + senha);
        console.log('hash: ' + user.senha);
        var validation = bcrypt.compareSync(senha, user.senha);
        console.log('validacao: ' + validation);
        if(validation == true)
        {
          console.log('Login Efetuado.');
          return res.status(200).json({
            user
          })
        }
        else
        {
          console.log('Senha Incorreta.');
          return res.status(400).json({
            message: 'Senha Incorreta.'
          })
        }
      })
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error
      })
    }
    
}