const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    title: String,
    description : String,
    comments : Array
  });

  const Question = mongoose.model('question', questionSchema);

    
  module.exports = {
    Question
  }