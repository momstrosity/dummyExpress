const fetch = require('node-fetch');

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3/simple/price';

async function fetchEthPrice() {
    try {
        const response = await fetch(`${COINGECKO_API_URL}?ids=ethereum&vs_currencies=usd`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch ETH price');
        }

        const data = await response.json();
        return data.ethereum.usd;
    } catch (error) {
        console.error('Error fetching ETH price:', error.message);
        throw error;
    }
}

module.exports = {
    fetchEthPrice
};