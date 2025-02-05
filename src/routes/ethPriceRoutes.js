const express = require('express');
const EthPriceController = require('../controllers/ethPriceController');

const router = express.Router();

router.get('/ethprice', EthPriceController.getEthPrice);

module.exports = router;