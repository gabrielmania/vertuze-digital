import connectDb from "../../../utils/connectDb";
import Series from "../../../models/series";

export default async function seriesDetailsHandler(req, res) {
  connectDb();
  const { id } = req.query;
  const series = await Series.find({ _id: id });
  res.json(series);
}
