const mongoose = require("mongoose");

const QuestionAnswersSchema = mongoose.Schema(
  {
    postId: {
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
    dislike: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const QuestionAnswer = mongoose.model("QuestionAnswer", QuestionAnswersSchema);

module.exports = QuestionAnswer;
