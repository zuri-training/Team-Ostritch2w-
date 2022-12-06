const express = require('express');
const userController = express.Router();
const allModels = require('../database/models/index');

/**
 * skeleton route
 * Author: David Mebo
 * GitHub ID: meistens
 * Date Added: 06/12/2022
 *
 */
userController.get('/', (req, res) => {
  res.status(200).json({
    status: 'success page if you can see it',
  });
});

module.exports = userController;
