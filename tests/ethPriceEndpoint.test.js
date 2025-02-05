const request = require('supertest');
const app = require('../app');

describe('ETH Price Endpoint', () => {
  it('should return a valid ETH price', async () => {
    const response = await request(app).get('/api/ethprice');
    
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('price');
    expect(typeof response.body.price).toBe('number');
    expect(response.body.price).toBeGreaterThan(0);
  });
});