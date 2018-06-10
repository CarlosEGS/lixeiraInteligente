var Trash = require('../Models/TrashModel');
var User = require('../Models/userModel');

exports.CreateTrash = function (req, res) {

    console.log('CreateTrash');
    var trash = new Trash();
    trash.Nome = req.body.nome;
    trash.Descricao = req.body.descricao;
    trash.idAccount = req.body.idAccount;
    trash.Local = req.body.local;
    trash.User = req.body.idAccount;
    console.log('trash: ' + trash);

    console.log('Buscando Usuário');
    /*
    User.findOne({ email: trash.idAccount }).then(function (user) {
        console.log('USUARIO: ' + user.idAccount);
        trash.idAccount = user._id;
        console.log('lixeira com idUSUARIO: ' + trash.idAccount);
        console.log('idaccount: ' + trash.idAccount);
        console.log('trash: ' + trash);
        if (trash != null) {
            trash.save();
            console.log('Lixeira criada');
            return res.status(200).json({
                trash
            })
        }
        else {
            console.log('Informe Todos os dados.');
            return res.status(400).json({
                message: 'Informe Todos os dados.'
            })
        }
    });
    */
   trash.save();
}

exports.FindAllByIdAccount = function (req, res) {
    try {
        Trash.find(function (err, lixeiras) {
            console.log('FindAllByIdAccount')
            console.log('Buscando lixeiras')
            console.log('Lixeiras: ' + lixeiras)
            return res.status(200).json({
                lixeiras
            })
        });
    } catch (error) {
        console.log('Error: ' + error)
        return res.status(500).json({
            error
        })
    }
}

exports.DeleteTrash = function (req, res) {
    try {
        var id = req.body.idtrash;
        Trash.findByIdAndRemove(function (err, id) {
            console.log('DELETADO TIXINHA')
            return res.status(204)
        });
    } catch (error) {
        console.log('Error: ' + error)
        return res.status(500).json({
            error
        })
    }
}