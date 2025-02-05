const { fetchEthPrice } = require('../services/ethPriceService');

async function getEthPrice(req, res) {
    try {
        const price = await fetchEthPrice();
        res.json({ 
            currency: 'USD', 
            price: price 
        });
    } catch (error) {
        res.status(500).json({ 
            error: 'Unable to fetch ETH price', 
            details: error.message 
        });
    }
}

module.exports = {
    getEthPrice
};