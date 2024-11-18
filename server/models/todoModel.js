const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  userid: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  priority: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  progress: {
    type: Number,
    required: true,
  },
  timeline: {
    type: Date,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Todo", TodoSchema, "todo");
