/**
 * Server setup
 * Author: David Mebo
 * GitHub ID: meistens
 * Date Added: 08/12/2022
 *
 */
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import { userController } from './controller';
require('./utils/mongoose');
const app = express();
const PORT = process.env.PORT;

app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);
app.use(bodyParser.json());

app.use('/', userController);

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
