import connectDb from "../../../../utils/connectDb";
import Movie from "../../../../models/movie";

export default async function handler(req, res) {
  connectDb();
  const { id } = req.query;
  const movie = await Movie.find({ _id: id });
  res.json(movie);
}
