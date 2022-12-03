import connectDb from "../../../../utils/connectDb";
import Series from "../../../../models/series";

export default async function handler(req, res) {
  connectDb();
  const { id } = req.query;
  const series = await Series.findOne({ _id: id });
  res.json(series);
}
