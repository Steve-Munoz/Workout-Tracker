let mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MyWorkout = new Schema({
  day: {
    type: Date,
    default: new Date().setDate(new Date().getDate()),
  },
  exercises: [
    {
      type: { type: String },
      name: { type: String },
      duration: { type: Number },
      weight: { type: Number },
      reps: { type: Number },
      sets: { type: Number },
      distance: { type: Number },
    },
  ],
});

const Workout = mongoose.model("Workout", MyWorkout);

module.export = Workout;
