const connectDb = require("../utils/connectDb");
const Movie = require("../models/movie");
const Series = require("../models/series");
const mongoose = require("mongoose");

const seedDb = async (type) => {
  connectDb();

  const baseUrl = `https://api.themoviedb.org/3/discover/${type}?api_key=${process.env.MOVIE_DB_API}&sort_by=popularity.desc&page=`;

  if (type === "movie") {
    await Movie.deleteMany();
    for (let i = 0; i < 50; i++) {
      const res = await fetch(`${baseUrl}${i + 1}`);
      const data = await res.json();
      for (const movie of data.results) {
        const {
          title,
          overview,
          release_date,
          original_language,
          poster_path,
        } = movie;
        const newMovie = new Movie({
          title,
          description: overview,
          releaseDate: release_date,
          language: original_language,
          imgSrc: `https://image.tmdb.org/t/p/w500${poster_path}`,
          purchasePrice: Math.floor(Math.random() * 100) + 100,
          rentPrice: Math.floor(Math.random() * 50) + 50,
        });
        await newMovie.save();
      }
    }
  }

  if (type === "tv") {
    await Series.deleteMany();
    for (let i = 0; i < 50; i++) {
      const res = await fetch(`${baseUrl}${i + 1}`);
      const data = await res.json();
      for (const series of data.results) {
        const {
          name,
          overview,
          first_air_date,
          original_language,
          origin_country,
          poster_path,
        } = series;
        const newSeries = new Series({
          title: name,
          description: overview,
          firstAirDate: first_air_date,
          language: original_language,
          country: origin_country[0],
          imgSrc: `https://image.tmdb.org/t/p/w500${poster_path}`,
          purchasePrice: Math.floor(Math.random() * 150) + 150,
          rentPrice: Math.floor(Math.random() * 75) + 75,
        });
        await newSeries.save();
      }
    }
  }
};

seedDb("movie").then(() => {
  seedDb("tv").then(() => {
    mongoose.connection.close();
  });
});
