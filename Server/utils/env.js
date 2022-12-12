/**
 * environment variables
 * Author: David Mebo
 * GitHub ID: David Mebo
 * Date Added: 11/12/2022
 *
 */
import * as dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT;
const DB_URI = process.env.NODE_ENV === 'test' ? process.env.TEST_URI : process.env.URI;

export { PORT, DB_URI };
