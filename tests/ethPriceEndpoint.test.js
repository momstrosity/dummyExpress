const request = require('supertest');
const app = require('../app');
const { fetchEthPrice } = require('../src/services/ethPriceService');

jest.setTimeout(10000); // Increase timeout for network request

describe('ETH Price Endpoint', () => {
    it('should return the current ETH price', async () => {
        const response = await request(app).get('/api/ethprice');
        
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('currency', 'USD');
        expect(response.body).toHaveProperty('price');
        
        // Price should be a positive number
        expect(typeof response.body.price).toBe('number');
        expect(response.body.price).toBeGreaterThan(0);
    });
});