var express = require('express');
var router = express.Router();
var loginController = require('../Controllers/loginController');
var vacaController = require('../Controllers/vacaController');

router.post('/CreateAccount', function(req, res) {
    loginController.CreateAccount(req, res);
});

router.post('/Login', function(req, res) {
    loginController.Login(req, res);
});

router.post('/CadastraVaca', function(req, res) {
    vacaController.CadastroVaca(req, res);
});

router.get('/GetAllVacas', function(req, res) {
    vacaController.GetAllVacas(req, res);
});

module.exports = router;