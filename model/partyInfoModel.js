const mongoose = require("mongoose");

const partyInfoSchema = new mongoose.Schema({
  photo: String,
  name1: String,
  name2: String,
  dateOfParty: Date,
  address: String,
  message: String,
  adminId: String,
  date: {
    type: Date,
    default: Date.now,
  },
}); 

module.exports = mongoose.model("partyInfo", partyInfoSchema);
      