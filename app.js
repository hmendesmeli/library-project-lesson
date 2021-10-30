const express = require('express');
const mongoose = require('mongoose');

const bookRoutes = require('./routes/index.js')

const app = express();

mongoose.connect('mongodb://localhost:27017/library-api')
  .then(() => console.log('Connected to the database'))
  .catch(error => console.log('Error trying to connect with database.', error));

app.use(express.json());

app.use('/', bookRoutes);

app.use((err, req, res, next) => {
  // always log the error
  console.error('ERROR', req.method, req.path, err);

  // only send response if the error ocurred before sending a response (we can't sent two responses to a single request)
  if (!res.headersSent) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3003);
