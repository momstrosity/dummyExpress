const fetch = require('node-fetch');

class EthPriceService {
  static async getEthPriceInUSD() {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
      const data = await response.json();
      return data.ethereum.usd;
    } catch (error) {
      console.error('Error fetching ETH price:', error);
      throw new Error('Unable to fetch ETH price');
    }
  }
}

module.exports = EthPriceService;