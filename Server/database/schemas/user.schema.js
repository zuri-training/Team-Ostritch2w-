/**
 * Signup/Register Schema
 * Author: David Mebo
 * GitHub ID: meistens
 * Date Added: 06/12/2022
 *
 */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

/**
 * Passwords hashing and comparing logic here
 * Author:
 * GitHub ID:
 * Date Added: 06/12/2022
 *
 */
// code here
