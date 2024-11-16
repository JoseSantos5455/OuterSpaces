const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  created_at: {
    type: String,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema, "user");
