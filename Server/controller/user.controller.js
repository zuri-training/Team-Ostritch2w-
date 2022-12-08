/**
 * Userbase controller
 * Author: David Mebo
 * GitHub ID: meistens
 * Date Added: 08/12/2022
 *
 */

import express from 'express';
import { User } from '../database/models';
const userRouter = express.Router();

/**
 * GET/ Homepage
 * Author: David Mebo
 * GitHub ID: meistens
 * Date Added: 08/12/2022
 *
 */

userRouter.get('/', (req, res) => {
  if (req.user) {
    return res.redirect('/qr_link');
  } else {
    res.render('index.html');
  }
});

/**
 * GET/ register controller
 * Author: David Mebo
 * GitHub ID: meistens
 * Date Added: 08/12/2022
 *
 */

export default userRouter;
