const express = require('express');
const userController = express.Router();
userController.get('/', (req, res) => {
  res.status(200).json({
    status: 'success page if you can see it',
  });
});

module.exports = userController;
