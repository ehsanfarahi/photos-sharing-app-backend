const mongoose = require("mongoose");

const mainPhotoSchema = new mongoose.Schema({
  photo: String,
  adminId: String,
  date: {
    type: Date,
    default: Date.now,
  },
});    

module.exports = mongoose.model("mainPhoto", mainPhotoSchema);
      