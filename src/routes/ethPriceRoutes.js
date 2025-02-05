const express = require('express');
const { getEthPrice } = require('../controllers/ethPriceController');

const router = express.Router();

router.get('/ethprice', getEthPrice);

module.exports = router;