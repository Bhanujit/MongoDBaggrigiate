const express = require("express");
const {
  createAmovie,
  getAllMovies,
  deleteMovie,
  // getSortedMovies,
  updateMovie,
  getGenreCount,
  getMoviesNameByGenre,
} = require("../controllers/moviesController");

const router = express.Router();

router.route("/").get(getAllMovies);
router.route("/create").post(createAmovie);
router.route("/:id").delete(deleteMovie).put(updateMovie);
router.route("/genre").get(getGenreCount);
router.route("/namesbygenre").get(getMoviesNameByGenre);

module.exports = router;
