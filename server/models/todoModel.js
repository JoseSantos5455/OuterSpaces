const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
<<<<<<< HEAD
=======
  userid: {
    type: mongoose.Types.ObjectId,
    // required: true,
  },
>>>>>>> 5f43e8c9f49acb4eebaaefd794ef8b524a864018
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
