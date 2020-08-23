const express = require("express");
const path = require("path");
//Morgan is middleware
const logger = require("morgan");

const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

// const pathExcerciseHtml = require("./public/");

// requires the content in the models folder
// const db = require("./models");

const app = express();

const Workout = require("./models");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));

//↓ route goes to the homepage
app.use(express.static("public"));
// ↓connect to mongo database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

//↓ front end routes
app.get("/exercise", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/exercise.html"));
});

app.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/stats.html"));
});
app.get("/api/workouts", function (req, res) {
  Workout.find({}).then(function (data) {
    res.json(data);
  });
});

app.put("/api/workouts/:id", function (req, res) {
  Workout.findByIdAndUpdate(req.params.id, { exercises: req.body }).then(
    function (data) {
      res.json(data);
    }
  );
});

app.post("/api/workouts", function (req, res) {
  Workout.create({}).then(function (data) {
    res.json(data);
  });
});

app.get("/api/workouts/range", function (req, res) {
  Workout.find({}).then(function (data) {
    res.json(data);
  });
});
// Listens for server port
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
