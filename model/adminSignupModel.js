const mongoose = require("mongoose");

const adminSignupSchema = new mongoose.Schema({
  email: String,
  password: String,
});

module.exports = mongoose.model("admin", adminSignupSchema);
  