/**
 * Server-side validation
 * Author: David Mebo
 * GitHub ID: meistens
 * Date Added: 09/12/2022
 *
 */
import joi from 'joi';

const authUserSchema = joi.object({
  email: joi.string().email().required(),
  password: joi
    .string()
    .regex(/^[a-zA-Z0-9]{8,30}$/)
    .required(),
});

export default authUserSchema;
