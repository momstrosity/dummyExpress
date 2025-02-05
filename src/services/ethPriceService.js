const fetch = require('node-fetch');

class EthPriceService {
  static async getEthPrice() {
    const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd';
    
    try {
      const response = await fetch(COINGECKO_API_URL);
      
      if (!response.ok) {
        throw new Error('Unable to fetch Ethereum price');
      }
      
      const data = await response.json();
      return data.ethereum.usd;
    } catch (error) {
      console.error('Error fetching ETH price:', error);
      throw new Error('Failed to retrieve Ethereum price');
    }
  }
}

module.exports = EthPriceService;