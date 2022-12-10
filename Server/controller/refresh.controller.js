/**
 * Refresh token route. Plug it in so tokens get refreshed for use
 * Author: David Mebo
 * GitHub ID: meistens
 * Date Added: 10/12/2022
 *
 */
import express from 'express';
import httpErr from 'http-errors';
const refToks = express.Router();
import { signAccTok } from '../middleware/index.js';
import { signRefTok, verifyRefTok } from '../middleware/index.js';

refToks.post('/refresh_tokens', async (req, res, next) => {
  try {
    const { refreshTok } = req.body;
    if (!refreshTok) throw httpErr.BadRequest();

    const userId = await verifyRefTok(refreshTok);
    const newAccessTok = await signAccTok(userId);
    const newRefreshTok = await signRefTok(userId);

    res.status(200).send({ access_token: newAccessTok, refresh_token: newRefreshTok });
  } catch (err) {
    next(err);
  }
});

export default refToks;
