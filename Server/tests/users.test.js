/**
 * User routes test (register, login, logout).
 * Author: David Mebo
 * GitHub ID: meistens
 * Date Added: 11/12/2022
 *
 */
import mongoose from 'mongoose';
import supertest from 'supertest';
import app from '../index.js';
const api = supertest(app);

// added a skeleton so it makes sense. Any of the full-stack guys should take it from here. Checkout my branch and make changes
test('what the test is for', async () => {
  await api.get('/route/to/test').expect(200).expect('Content-Type: /application/json/');
}, 100000);

afterAll(() => {
  mongoose.connection.close();
});
