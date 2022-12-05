const mongoose = require("mongoose");
require("dotenv").config();

// "mongodb://127.0.0.1:27017/vertuze-digital"
// `mongodb+srv://admin:${process.env.MONGODB_PASS}@cluster0.ti1fl3x.mongodb.net/?retryWrites=true&w=majority`
const connectDb = async () => {
  await mongoose.connect(
    `mongodb+srv://admin:${process.env.MONGODB_PASS}@cluster0.k3q0kve.mongodb.net/?retryWrites=true&w=majority`
  );
  console.log("Connected to database");
};

module.exports = connectDb;
