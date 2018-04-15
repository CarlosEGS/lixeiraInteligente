var Vaca = require('../Models/vacaModel');

/* istanbul ignore next */
exports.CadastroVaca = function (req, res) {

    var vaca = new Vaca();
    vaca.nome = req.body.nome;
    vaca.leite = req.body.leite;
    vaca.racao = req.body.racao

    try {
        if (vaca.nome == "" || vaca.leite == "" || vaca.racao == "") {
            return res.status(400).json({
                message: 'Informe todos os dados'
            })
        }
        vaca.save();
        return res.status(201).json({
            message: 'Vaca Cadastrada.'
        })
    } catch (error) {
        return res.status(500).json({
            error
        })
    }
}
/* istanbul ignore next */
exports.GetAllVacas = function (req, res) {
    try {
        Vaca.find(function (err, vacas) {
            if (err)
                return res.status(500).json({
                    error
                })

            if (vacas == null)
                return res.status(404).json({
                    message: "Nenhuma vaca cadastrada."
                })

            return res.status(200).json({
                vacas
            })
        });
    } catch (error) {
        return res.status(500).json({
            error
        })
    }

}