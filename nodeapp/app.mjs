import express from 'express.js';

import connectToDatabase from './helpers.mjs'

const app = express();

app.get('/', (req, res) => {
  res.send('<h2>Hi there!</h2>');
});

await connectToDatabase();

app.listen(3000);
