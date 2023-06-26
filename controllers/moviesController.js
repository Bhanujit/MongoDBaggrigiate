const Movies = require("../models/moviesModal");
const catchAsyncErrors = require("../middlewares/asyncErrorHandler");

exports.getAllMovies = catchAsyncErrors(async (req, res, next) => {
  const allMovies = await Movies.find({});
  res.status(200).json({
    success: true,
    allMovies,
  });
});

exports.createAmovie = catchAsyncErrors(async (req, res, next) => {
  const { title, genre, actors, releaseYear, director } = req.body;
  const movie = await Movies.create({
    title,
    genre,
    actors,
    releaseYear,
    director,
  });
  res.status(201).json({
    success: true,
    movie,
  });
});

exports.deleteMovie = catchAsyncErrors(async (req, res, next) => {
  await Movies.findByIdAndRemove(req.params.id);
  res.status(200).json({
    success: true,
    message: "deleted successfully",
  });
});

exports.updateMovie = catchAsyncErrors(async (req, res, next) => {
  const movie = await Movies.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    movie,
  });
});
exports.getGenreCount = catchAsyncErrors(async (req, res, next) => {
  const movies = await Movies.aggregate([
    { $group: { _id: "$genre", count: { $sum: 1 } } },
    { $sort: { count: -1 } },
  ]);
  res.status(200).json({
    success: true,
    movies,
  });
});
exports.getMoviesNameByGenre = catchAsyncErrors(async (req, res, next) => {
  const movies = await Movies.aggregate([
    { $group: { _id: "$genre", names: { $push: "$title" } } },
    { $sort: { count: -1 } },
  ]);
  res.status(200).json({
    success: true,
    movies,
  });
});
