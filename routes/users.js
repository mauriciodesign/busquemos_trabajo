var express = require('express');
var userController = require('../controllers/users');
var router = express.Router();

/* Post user  */
router.post('/', function(req, res, next) {
  userController.user_create(req, res, next);
});

// Esta es la ruta que se debe llamar para traer todos los usuarios del sistema.
router.get('/', function(req, res, next) {
  userController.all_users(req, res, next);
});

module.exports = router;
