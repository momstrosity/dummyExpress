const EthPriceService = require('../services/ethPriceService');

class EthPriceController {
  static async getEthPrice(req, res) {
    try {
      const ethPrice = await EthPriceService.getEthPrice();
      res.json({ price: ethPrice });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = EthPriceController;