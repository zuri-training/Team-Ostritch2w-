/**
 * Logout controller. FRONTEND, THIS IS YOUR JOB, NOT MINE!
 * GETTING TIRED OF IT ALL
 * Author: David Mebo
 * GitHub ID: meistens
 * Date Added: 11/12/2022
 *
 */
import express from 'express';
const logoutRouter = express.Router();
import httpErr from 'http-errors';
import { verifyRefTok } from '../middleware/index.js';

logoutRouter.delete('/logout', async (req, res, next) => {
  try {
    const { refreshTok } = req.body;
    if (!refreshTok) throw httpErr.BadRequest();

    const userId = await verifyRefTok(refreshTok);
    if (!userId) return res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

export default logoutRouter;
