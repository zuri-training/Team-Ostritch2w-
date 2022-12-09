/**
 * JWT access tokens and verification
 * Author: David Mebo
 * GitHub ID: meistens
 * Date Added: 09/12/2022
 *
 */
import * as dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';
import httpErr from 'http-errors';
const accTok = process.env.ACCTOK;

export const signAccTok = (userId) => {
  return new Promise((resolve, reject) => {
    const payload = {};
    const secret = accTok;
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
};

export const verifyAccTok = (req, res, next) => {
  const authHeader = req.headers['authorization'] || req.headers['Authorization'];
  const bearerTok = authHeader.split(' ');
  const token = bearerTok[1];
  const secret = accTok;
  jwt.verify(token, secret, (err, payload) => {
    if (err) {
      if (!req.headers['authorization'] || !req.headers['Authorization'])
        return next(httpErr.Unauthorized());
      else if (err.name === 'JsonWebTokenError') return next(httpErr.Unauthorized());
      else return next(httpErr.Unauthorized(err.message));
    }
    req.payload = payload;
    next();
  });
};
