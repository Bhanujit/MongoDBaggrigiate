const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const databaseConnection = () => {
  mongoose
    .connect(`mongodb://0.0.0.0:27017/Movies`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("congratulations your server is connected to mongodb");
    });
};

app.use(express.json());
databaseConnection();
app.use(bodyParser.urlencoded({ extended: true }));
//database connection code

// routeImports
const moviesRoute = require("./routes/movieRoutes");

app.use(moviesRoute);

app.listen(4000, () => {
  console.log(`app is running on port 4000`);
});
