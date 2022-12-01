import connectDb from "../../../utils/connectDb";
import Movie from "../../../models/movie";

export default async function moviesHandler(req, res) {
  connectDb();
  const { limit, skip } = req.query;
  const movies = await Movie.find().skip(skip).limit(limit);
  res.json(movies);
}
