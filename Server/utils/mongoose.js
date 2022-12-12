/**
 * mongoose configs. Why must it have a seperate file?
 * For readability (duh) and if I need to make changes, it'll be painless
 * Author: David Mebo
 * GitHub ID: meistens
 * Date Added: 08/12/2022
 *
 */
import mongoose from 'mongoose';
import { DB_URI } from '../utils/env.js';

mongoose.connection.on('connected', () => {
  console.log('mongoose connnected');
});
mongoose.connection.on('error', (err) => {
  console.log(err.message);
});
mongoose.connection.on('disconnected', () => {
  console.log('mongoose disconnected');
});
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  process.exit(0);
});

mongoose.set('strictQuery', true);
await mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('mongoose is working as expected'))
  .catch((err) => console.log(err.message));

export default mongoose;
