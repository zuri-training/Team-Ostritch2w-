/**
 * QR model file
 * Author: David Mebo
 * GitHub ID: meistens
 * Date Added: 10/12/2022
 *
 */
import mongoose from 'mongoose';
import qrSchema from '../schemas/qr.schema.js';

const QR = mongoose.model('QR', qrSchema);

export default QR;
