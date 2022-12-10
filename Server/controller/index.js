/**
 * One-stop for importing and exporting controllers. Controllers in one file is
 * good but this is better.
 * Author: David Mebo
 * GitHub ID: meistens
 * Date Added: 08/12/2022
 *
 */
import userRouter from './user.controller.js';
import refToks from './refresh.controller.js';
import qrRouter from './qr.controller.js';
import logoutRouter from './logout.controller.js';

export { userRouter, refToks, qrRouter, logoutRouter };
