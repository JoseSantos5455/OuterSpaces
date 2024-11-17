const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
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
  start_date: {
    type: Date,
  },
  end_date: {
    type: Date,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Todo", TodoSchema, "todo");
