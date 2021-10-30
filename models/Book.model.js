const { Schema, model } = require('mongoose');

const bookSchema = new Schema({
  title: { type: String },
  author: { type: String },
  description: { type: String },
  rating: { type: Number, min: 0, max: 10 },
});

module.exports = model('book', bookSchema);
