/**
 * Server setup
 * Author: David Mebo
 * GitHub ID: meistens
 * Date Added: 08/12/2022
 *
 */
import express from 'express';
import bodyParser from 'body-parser';
import { userRouter, refToks, qrRouter, logoutRouter } from './controller/index.js';
import { mongoose } from './utils/index.js';
import httpErr from 'http-errors';
const app = express();
import cors from 'cors';

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);
app.use(bodyParser.json());
app.use(express.json());

// static file(s) use. Uncomment for use on the frontend
// app.use(express.static(path.join(__dirname, '/public)))

app.use('/', userRouter);
app.use('/', refToks);
app.use('/', qrRouter);
app.use('/', logoutRouter);

app.use(async (req, res, next) => {
  next(httpErr.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

export default app;
