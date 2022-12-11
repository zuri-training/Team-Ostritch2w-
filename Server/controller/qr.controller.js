/**
 * QR file.
 * Author: David Mebo
 * GitHub ID: meistens
 * Date Added: 10/12/2022
 *
 */
import express from 'express';
import { User, QR } from '../database/models/index.js';
import { verifyAccTok } from '../middleware/index.js';
import qr from 'qrcode';
import httpErr from 'http-errors';
import fs from 'fs';
const qrRouter = express.Router();

/**
 * GET/ generate QR
 * Author: David Mebo
 * GitHub ID: meistens
 * Date Added: 10/12/2022
 *
 */
qrRouter.post('/generate_qr', verifyAccTok, async (req, res, next) => {
  try {
    const { data } = req.body;
    const svgData = await qr.toString(data, { type: 'svg' });
    const jpgData = await qr.toString(data, { type: 'jpg' });
    const pdfData = await qr.toString(data, { type: 'pdf' });
    const pngData = await qr.toString(data, { type: 'png' });

    const svgBuf = new Buffer.from(svgData);
    const pdfBuf = new Buffer.from(pdfData);
    const pngBuf = new Buffer.from(pngData);
    const jpgBuf = new Buffer.from(jpgData);

    const newQRModel = new QR({
      data: data,
      pdf: pdfBuf,
      svg: svgBuf,
      png: pngBuf,
      jpg: jpgBuf,
    });
    await newQRModel.save();

    res.status(200).json({ message: 'QR generated and saved successfully' });
  } catch (err) {
    if (err)
      return next(httpErr.InternalServerError('error generating QR, try again in few seconds'));
    next(err);
  }
});

/**
 * GET/ download QR in SVG format
 * Author: David Mebo
 * GitHub ID: meistens
 * Date Added: 10/12/2022
 *
 */
qrRouter.get('/downlad_svg', verifyAccTok, async (req, res, next) => {
  try {
    const savedQR = await QR.findOne();
    const svg = savedQR.svg;

    fs.writeFileSync('qr.svg', svg);
    res.status(200).download('qr.svg');
    res.status(200).json({ message: 'QR downloaded' });
  } catch (err) {
    return next(httpErr.InternalServerError('error processing download'));
  }
});

/**
 * GET/ download QR in PDF format
 * Author: David Mebo
 * GitHub ID: meistens
 * Date Added: 11/12/2022
 *
 */
qrRouter.get('/downlad_pdf', verifyAccTok, async (req, res, next) => {
  try {
    const savedQR = await QR.findOne();
    const pdf = savedQR.pdf;

    fs.writeFileSync('qr.pdf', pdf);
    res.status(200).download('qr.pdf');
    res.status(200).json({ message: 'QR downloaded' });
  } catch (err) {
    return next(httpErr.InternalServerError('error processing download'));
  }
});

/**
 * GET/ download QR in JPG format
 * Author: David Mebo
 * GitHub ID: meistens
 * Date Added: 10/12/2022
 *
 */
qrRouter.get('/downlad_jpg', verifyAccTok, async (req, res, next) => {
  try {
    const savedQR = await QR.findOne();
    const jpg = savedQR.jpg;

    fs.writeFileSync('qr.jpg', jpg);
    res.status(200).download('qr.jpg');
    res.status(200).json({ message: 'QR downloaded' });
  } catch (err) {
    return next(httpErr.InternalServerError('error processing download'));
  }
});

/**
 * GET/ download QR in PNG format
 * Author: David Mebo
 * GitHub ID: meistens
 * Date Added: 11/12/2022
 *
 */
qrRouter.get('/downlad_png', verifyAccTok, async (req, res, next) => {
  try {
    const savedQR = await QR.findOne();
    const png = savedQR.png;

    fs.writeFileSync('qr.png', png);
    res.status(200).download('qr.png');
    res.status(200).json({ message: 'QR downloaded' });
  } catch (err) {
    return next(httpErr.InternalServerError('error processing download'));
  }
});

export default qrRouter;
