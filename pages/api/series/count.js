import connectDb from "../../../utils/connectDb";
import Series from "../../../models/series";

export default async function seriesDetailsHandler(req, res) {
  connectDb();
  const series = await Series.find();
  res.json(series.length);
}
