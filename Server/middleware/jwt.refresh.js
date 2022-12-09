/**
 * Refresh tokrn and verification
 * Author: David Mebo
 * GitHub ID: meistens
 * Date Added: 09/12/2022
 *
 */
import * as dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';
import httpErr from 'http-errors';
const refTok = process.env.REFTOK;

export default {
  signRefTok: (userId) => {
    return new Promise((resolve, reject) => {
      const payload = {};
      const secret = refTok;
      const options = {
        expiresIn: '5m',
        audience: userId,
        issuer: 'replace_name.com',
      };
      jwt.sign(payload, secret, options, (err, token) => {
        if (err) {
          console.error(err);
          reject(httpErr.InternalServerError());
          return;
        }
        resolve(token);
      });
    });
  },

  verifyRefTok: (refreshTok) => {
    return new Promise((resolve, reject) => {
      const secret = refTok;
      jwt.verify(refreshTok, secret, (err, payload) => {
        if (err) return reject(httpErr.Unauthorized());
        const userId = payload.aud;
        resolve(userId);
      });
    });
  },
};
