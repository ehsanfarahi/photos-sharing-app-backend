const mongoose = require("mongoose");

const uploadPhotoSchema = new mongoose.Schema({
  photo: Array,
  userId: String,
  date: {
    type: Date,
    default: Date.now,
  },
}); 

module.exports = mongoose.model("photo", uploadPhotoSchema);
     