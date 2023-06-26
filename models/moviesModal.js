const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
  },
  genre: String,
  releaseYear: Number,
  director: String,
  actors: [String],
});

module.exports = mongoose.model("Movies", movieSchema);
