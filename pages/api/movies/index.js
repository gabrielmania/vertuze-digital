import connectDb from "../../../utils/connectDb";
import Movie from "../../../models/movie";

export default async function moviesHandler(req, res) {
  connectDb();
  const movies = await Movie.find();
  res.json(movies);
}
