const mongoose = require("mongoose");
const { Schema, model, models } = mongoose;

const movieSchema = new Schema({
  title: String,
  description: String,
  language: String,
  releaseDate: String,
  imgSrc: String,
  purchasePrice: Number,
  rentPrice: String,
});

const Movie = models.Movie || model("Movie", movieSchema);

module.exports = Movie;
