/**
 * One-stop for importing and exporting configs
 * Author: David Mebo
 * GitHib ID: meistens
 * Date Added: 09/12/2022
 *
 */

import mongoose from './mongoose.js';
import { authUserSchema, loginUserSchema } from './joi.schema.js';

export { mongoose, authUserSchema, loginUserSchema };
