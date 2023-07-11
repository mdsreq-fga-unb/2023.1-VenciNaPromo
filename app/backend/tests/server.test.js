const request = require('supertest');
const app = require('../server');

describe('Test the root path', () => {
  test('It should return "Hello, world!"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, world!');
  });
});
