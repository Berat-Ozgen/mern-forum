const mongoose = require("mongoose");

const QuestionsSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  problem: {
    type: String,
    required: true,
  },
  likes: {
    type: Array,
    default: [],
  },
  disLike: {
    type: Array,
    default: [],
  },
  solved: {
    type: boolean,
    default: false,
  },
});
