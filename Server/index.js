/**
 * Instance of server running here. This is how it looks like if you want to do
 * tests
 * Author: David Mebo
 * GitHub ID: meistens
 * Date Added: 11/12/2022
 *
 */
import { PORT } from './utils/env.js';
import app from './server.js';
import http from 'http';
const PORT_DEPLOY = PORT || 8080;
const server = http.createServer(app);

server.listen(PORT_DEPLOY, () => {
  console.log(`listening on port: ${PORT_DEPLOY}`);
});
