import connectDb from "../../../utils/connectDb";
import Movie from "../../../models/movie";

export default async function movieDetailsHandler(req, res) {
  connectDb();
  const movie = await Movie.find();
  res.json(movie.length);
}