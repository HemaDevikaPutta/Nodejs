const request = require('supertest');
const app = require('../app'); // Adjust the path if the test file is in a different location

describe('App Routes', () => {
  test('GET / should respond with a status code 200', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  test('GET /users should respond with a status code 200', async () => {
    const response = await request(app).get('/users');
    expect(response.statusCode).toBe(200);
  });

  test('GET /nonexistent should respond with a status code 404', async () => {
    const response = await request(app).get('/nonexistent');
    expect(response.statusCode).toBe(404);
  });
});
