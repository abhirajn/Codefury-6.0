const mongoose = require("mongoose");

const tipsSchema = new mongoose.Schema({
    image : String,
    title : String,
    description : String,
  });

  const Tips = mongoose.model('Tips', tipsSchema);

    
  module.exports = {
    Tips
  }