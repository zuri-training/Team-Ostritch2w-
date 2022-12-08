/**
 * User Schema model. Looks like a waste of time when it can be merged in one file
 * right?
 * Author: David Mebo
 * GitHub ID: meistens
 * Date Added: 08/12/2022
 *
 */
import mongoose from 'mongoose';
import userSchema from '../schemas/user.schema';

const User = mongoose.model('User', userSchema);

export default User;
