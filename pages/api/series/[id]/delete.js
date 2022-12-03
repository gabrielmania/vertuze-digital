import connectDb from "../../../../utils/connectDb";
import Series from "../../../../models/series";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const { id } = req.query;
    await Series.deleteOne({ _id: id });
    res.json("Succesfully deleted!");
  }
}
