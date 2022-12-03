import connectDb from "../../../../utils/connectDb";
import Movie from "../../../../models/movie";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const { id } = req.query;
    await Movie.deleteOne({ _id: id });
    res.json("Succesfully deleted!");
  }
}
