/**
 * Mongoose configuration file, test and dev database(s) can be setup here
 * Author: David Mebo
 * GitHub ID: meistens
 * Date added: 05/12/2022
 *
 */
// const db = process.env.URL
// env has not been setup at the moment, same with test and dev environments
mongoose
  .connect(`db`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('mongoose is up and running'))
  .catch((err) => console.log(err));
