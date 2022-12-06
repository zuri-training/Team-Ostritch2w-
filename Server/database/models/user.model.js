/**
 * Import User Schema here
 * Author: David Mebo
 * GitHub ID: meistens
 * Date Added: 06/12/2022
 *
 */
const mongoose = require('mongoose');
const userSchema = require('../schemas/user.schema');

const User = mongoose.model('User', userSchema);

module.exports = User;
