const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  name: String,  
}); 

module.exports = mongoose.model("user", userSchema);
     