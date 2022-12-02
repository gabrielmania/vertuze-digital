import connectDb from "../../../utils/connectDb";
import Movie from "../../../models/movie";

export default async function moviesHandler(req, res) {
  connectDb();

  const { q, skip, limit } = req.query;

  let movies;
  if (q === undefined) {
    movies = await Movie.find().skip(skip).limit(limit);
  } else {
    movies = await Movie.find({ title: { $regex: q, $options: "i" } });
  }

  res.json(movies);
}
