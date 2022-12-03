import connectDb from "../../../../utils/connectDb";
import Series from "../../../../models/series";

export default async function handler(req, res) {
  if (req.method === "PUT") {
    connectDb();

    const { id } = req.query;
    await Series.findOneAndUpdate({ _id: id }, JSON.parse(req.body));
    res.json("Updated successfully!");
  }
}
