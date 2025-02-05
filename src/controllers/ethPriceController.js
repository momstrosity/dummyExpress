const EthPriceService = require('../services/ethPriceService');

class EthPriceController {
  static async getEthPrice(req, res) {
    try {
      const price = await EthPriceService.getEthPriceInUSD();
      res.json({ price });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = EthPriceController;