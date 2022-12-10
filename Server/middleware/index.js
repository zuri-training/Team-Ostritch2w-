/**
 * One-stop file for importing and exporting middlewares
 * Author: David Mebo
 * GitHub ID: meistens
 * Date Added: 09/12/2022
 *
 */
import { signAccTok, verifyAccTok } from './jwt.access.js';
import { signRefTok, verifyRefTok } from './jwt.refresh.js';

export { signAccTok, verifyAccTok, signRefTok, verifyRefTok };
