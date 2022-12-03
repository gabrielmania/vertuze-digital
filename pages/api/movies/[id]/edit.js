import connectDb from "../../../../utils/connectDb";
import Movie from "../../../../models/movie";

export default async function handler(req, res) {
  if (req.method === "PUT") {
    connectDb();

    const { id } = req.query;
    await Movie.findOneAndUpdate({ _id: id }, JSON.parse(req.body));
    res.json("Updated successfully!");
  }
}
