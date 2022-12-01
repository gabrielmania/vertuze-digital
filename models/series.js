const mongoose = require("mongoose");
const { Schema, model, models } = mongoose;

const seriesSchema = new Schema({
  title: String,
  description: String,
  language: String,
  country: String,
  firstAirDate: String,
  imgSrc: String,
  purchasePrice: Number,
  rentPrice: String,
});
const Series = models.Series || model("Series", seriesSchema);
module.exports = Series;
