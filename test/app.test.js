const request = require('supertest');
const app = require('../app'); // Adjust the path if the test file is in a different location

describe('App Routes', () => {
  test('GET / should respond with a status code 200', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});
