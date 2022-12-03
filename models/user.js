const mongoose = require("mongoose");
const { Schema, model, models } = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  username: String,
  email: String,
  hash: String,
  salt: String,
});

const User = models.User || model("User", userSchema);

module.exports = User;
