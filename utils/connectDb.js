const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async () => {
  await mongoose.connect(process.env.MONGO_DB_URI);
};

module.exports = connectDb;
