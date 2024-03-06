var express = require('express');
var router = express.Router();
let cryptocurrencyController = require('../controllers/CryptocurrencyController');

router.get('/cryptocurrency', cryptocurrencyController.hehe);

module.exports = router;
