const mongoose = require("mongoose");

const counsellorSchema = new mongoose.Schema({
    name : String,
    degree : String,
    title : String,
    description : String,
    fees : Number
  });

  const Counsellor = mongoose.model('Counsellor', counsellorSchema);

    
  module.exports = {
    Counsellor
  }