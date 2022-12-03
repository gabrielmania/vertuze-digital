import connectDb from "../../../utils/connectDb";
import Series from "../../../models/series";

export default async function handler(req, res) {
  connectDb();

  const { q, limit, skip } = req.query;

  let series;
  if (q === undefined) {
    series = await Series.find().skip(skip).limit(limit);
  } else {
    series = await Series.find({ title: { $regex: q, $options: "i" } });
  }

  res.json(series);
}
