const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userController = require('./controller/imports');
/**
 * Middlewares
 * Author: David Mebo
 * GitHub ID: meistens
 * Date added: 05/12/2022
 *
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * API controllers in use here, DO NOT TAMPER UNLESS YOU KNOW
 * WHAT YOU ARE DOING OR ADDING MORE CONTROLLERS!
 * Author: David Mebo
 * GitHub ID: meistens
 * Date added: 05/12/2022
 *
 */
app.use('/', userController);

app.listen(8080, () => {
  console.log('guess it works if you see this on your browser');
});
