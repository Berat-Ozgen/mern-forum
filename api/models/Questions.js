const mongoose = require("mongoose");

const QuestionsSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    des: {
      type: String,
      required: true,
    },
    like: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Question = mongoose.model("Questions", QuestionsSchema);

module.exports = Question;
