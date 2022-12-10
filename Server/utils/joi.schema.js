/**
 * Server-side validation
 * Author: David Mebo
 * GitHub ID: meistens
 * Date Added: 09/12/2022
 *
 */
import joi from 'joi';

const authUserSchema = joi.object({
  name: joi.string().required().error(new Error('your full name is required')),
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'edu', 'info'] } })
    .required()
    .error(new Error('allowed tlds are .com, .net, .edu, .info')),
  phone_number: joi
    .string()
    .trim()
    .min(8)
    .max(12)
    .pattern(/^[0-9]+$/)
    .required()
    .error(
      new Error(
        'phone number must be a minimum of 8 digits, maximum 12 digits only, do not use symbols',
      ),
    ),
  password: joi
    .string()
    .regex(/^[a-zA-Z0-9]{8,30}$/)
    .required()
    .error(
      new Error(
        'your password must ne at least 8 chars long and contain any of the following characters: a-z, A-Z and 0-9',
      ),
    ),
  repeat_password: joi.ref('password'),
});

const loginUserSchema = joi.object({
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'info', 'edu'] } })
    .required()
    .error(new Error('allowed tlds are .com, .net, .edu, .info')),
  password: joi
    .string()
    .regex(/^[a-zA-Z0-9]{8,30}$/)
    .required()
    .error(
      new Error(
        'your password must ne at least 8 chars long and contain any of the following characters: a-z, A-Z and 0-9',
      ),
    ),
});

export { authUserSchema, loginUserSchema };
