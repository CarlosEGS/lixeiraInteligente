var express = require('express');
var router = express.Router();
var loginController = require('../Controllers/loginController');
var TrashController = require('../Controllers/TrashController');

router.post('/CreateAccount', function(req, res) {
    loginController.CreateAccount(req, res);
});

router.post('/Login', function(req, res) {
    loginController.Login(req, res);
});

router.post('/CreateTrash', function(req, res) {
    TrashController.CreateTrash(req, res);
});

router.get('/FindAllByIdAccount', function(req, res) {
    TrashController.FindAllByIdAccount(req, res);
})

router.delete('/DeleteTrash', function(req, res) {
    TrashController.DeleteTrash(req, res);
})

module.exports = router;