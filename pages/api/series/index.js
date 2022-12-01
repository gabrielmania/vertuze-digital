import connectDb from "../../../utils/connectDb";
import Series from "../../../models/series";

export default async function seriessHandler(req, res) {
  connectDb();
  const { limit, skip } = req.query;
  const series = await Series.find().skip(skip).limit(limit);
  res.json(series);
}
