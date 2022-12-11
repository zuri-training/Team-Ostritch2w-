/**
 * QR Schema
 * Author: David Mebo
 * GitHub ID: meistens
 * Date Added: 10/12/2022
 *
 */
import mongoose from 'mongoose';
import { Schema } from 'mongoose';
const qrSchema = new Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  data: {
    type: String,
  },
  svg: {
    type: Buffer,
  },
  pdf: {
    type: Buffer,
  },
  jpg: {
    type: Buffer,
  },
  png: {
    type: Buffer,
  },
});

export default qrSchema;
